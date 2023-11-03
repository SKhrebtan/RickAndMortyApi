import { useState, useEffect } from "react";

import { StyledList,MainDiv } from "./Home.styled";
import { getEpisodesThunk, getFavoriteEpisodeThunk } from "components/redux/dataSlice";
import { useSelector, useDispatch } from "react-redux";
import { CirclesWithBar } from 'react-loader-spinner';
import { ShowMoreBtn } from "components/Buttons/ShowMoreBtn";
import { AddFavoriteButtonComponent } from "components/Buttons/AddFavoriteButton";

export const Home = () => {
    const [page, setPage] = useState(1);
    const {episodes, error, isLoading, showBtn,favoriteEpisodes} = useSelector(state=>state.api);
    const dispatch = useDispatch();
    const value = 'episode';
    useEffect(() => {
        dispatch(getEpisodesThunk(page))
    }, [dispatch, page])
       const handleFavorite = id => {
        if (favoriteEpisodes.find(item => item.id === id)) {
            return alert('such episode is already favorite')
        }
dispatch(getFavoriteEpisodeThunk({ value, id }))
    }
    return (
        <MainDiv>
            
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
                {episodes.map(({id,name,air_date, episode}) =>
                    <li key={episode}>
                        <p>{name}</p>
                        <p>{episode}</p>
                        <p>{air_date}</p>
                        <AddFavoriteButtonComponent type='button' onClick={()=>handleFavorite(id)}/>
                        {/* <button type='button' onClick={()=>dispatch(getFavoriteEpisodeThunk({value,id}))}>Add to favorite</button> */}
                    </li>)}
            </StyledList>
            {showBtn && !error && <ShowMoreBtn type='button' onClick={() => setPage(page + 1)}/>}
        </MainDiv>
    )
}