import { useState, useEffect,Suspense } from "react";
import { Outlet } from "react-router-dom";
import { StyledList, StyledLi, StyledMainDiv,StyledLink,StyledNavLink,StyledLinksBlock } from "./Characters.styled";
import { getCharactesThunk } from "components/redux/dataSlice";
import { useSelector, useDispatch } from "react-redux";
import { CirclesWithBar } from 'react-loader-spinner';
import { ShowMoreBtn } from "components/Buttons/ShowMoreBtn";
import { getFavoriteEpisodeThunk } from "components/redux/dataSlice";
import { AddFavoriteButtonComponent } from "components/Buttons/AddFavoriteButton";
export const Characters = () => {
    const [page, setPage] = useState(1);
    
    const  { characters, isLoading, error } = useSelector(state => state.api);
    
    const dispatch = useDispatch();

    const value = 'character';
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
  wrapperClass="loader"
  visible={true}
  outerCircleColor=""
  innerCircleColor=""
  barColor=""
  ariaLabel='circles-with-bar-loading'
/>}
            <StyledList>
                {characters.map(({ id, name, image }) =>
                   
                    <StyledLi key={id}>
                         <StyledLink key={id} to={`/characters/${id}`} >
                                                <p>{name}</p>
                            <img src={image} alt={name} />
                        </StyledLink>
                        <AddFavoriteButtonComponent type='button' onClick={() => dispatch(getFavoriteEpisodeThunk({ value, id }))}/>
                            {/* <button type='button' onClick={() => dispatch(getFavoriteEpisodeThunk({ value, id }))}>Add to favorite</button> */}
                                               </StyledLi>
                        
                    )}
            </StyledList>
            {!error && <ShowMoreBtn type='button' onClick={() => setPage(page + 1)}/>}
            <div className='suspense-div'>
                <StyledLinksBlock>
                    <StyledNavLink to="search-character">Search</StyledNavLink>
                <StyledNavLink to="favorite-characters">Favorite</StyledNavLink>
                </StyledLinksBlock>
                
                 <Suspense fallback="isLoading">
                 <Outlet/>
                </Suspense></div>
             
        </StyledMainDiv>
    )
}
