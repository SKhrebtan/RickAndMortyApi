import { useState, useEffect,Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { StyledList, StyledLi, StyledMainDiv,StyledLink } from "./Characters.styled";
import { getCharactesThunk } from "components/redux/dataSlice";
import { useSelector, useDispatch } from "react-redux";


export const Characters = () => {
    const [page, setPage] = useState(1);
    
    const  { items, isLoading, error } = useSelector(state => state.characters);
    console.log(items)
    console.log(isLoading)
    console.log(error)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCharactesThunk(page))
    },[dispatch, page])
    return (
        <StyledMainDiv>
            <h2>Characters</h2>
            <StyledList>
                {items.map(({ id, name, image }) =>
                    <StyledLink key={id} to={`/characters/${id}`} >
                                        <StyledLi >
                                                <p>{name}</p>
                        <img src={image} alt={name} />
                                               </StyledLi>
                         </StyledLink>
                    )}
            </StyledList>
            <button className='more-btn' type='button' onClick={() => setPage(page + 1)}>Load more</button>
            <div className='suspense-div'>
            <NavLink to="search-character">Search</NavLink>
                 <Suspense fallback="isLoading">
                 <Outlet/>
                </Suspense></div>
             
        </StyledMainDiv>
    )
}

    // useEffect(() => {
    //     FetchCharacters(page).then(({ results, info }) => {
    //         setCharacters(prevCharacters => page === 1 ? results : [...prevCharacters, ...results]);
    //         if (page === info.pages) {
    //              setLastPage(true)
    //          }
    //     })
    // },[page])