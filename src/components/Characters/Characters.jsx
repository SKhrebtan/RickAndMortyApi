import { useState, useEffect,Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { StyledList, StyledLi, StyledMainDiv,StyledLink } from "./Characters.styled";
import { getCharactesThunk } from "components/redux/dataSlice";
import { useSelector, useDispatch } from "react-redux";
import { CirclesWithBar } from 'react-loader-spinner';

export const Characters = () => {
    const [page, setPage] = useState(1);
    
    const  { characters, isLoading, error } = useSelector(state => state.api);
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCharactesThunk(page))
    },[dispatch, page])
    return (
        <StyledMainDiv>
            <h2>Characters</h2>
              {error && <h3>Something went wrong!</h3>}
            {isLoading && <CirclesWithBar
  height="100"
  width="100"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  outerCircleColor=""
  innerCircleColor=""
  barColor=""
  ariaLabel='circles-with-bar-loading'
/>}
            <StyledList>
                {characters.map(({ id, name, image }) =>
                    <StyledLink key={id} to={`/characters/${id}`} >
                                        <StyledLi >
                                                <p>{name}</p>
                        <img src={image} alt={name} />
                                               </StyledLi>
                         </StyledLink>
                    )}
            </StyledList>
            {!error && <button className='more-btn' type='button' onClick={() => setPage(page + 1)}>Load more</button>}
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