import { useState, useEffect } from "react";

import { StyledList,MainDiv } from "./Home.styled";
import { getEpisodesThunk } from "components/redux/dataSlice";
import { useSelector, useDispatch } from "react-redux";
import { CirclesWithBar } from 'react-loader-spinner';
import { ShowMoreBtn } from "components/ShowMoreBtn/ShowMoreBtn";

export const Home = () => {
    const [page, setPage] = useState(1);
    const {episodes, error, isLoading, showBtn} = useSelector(state=>state.api);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getEpisodesThunk(page))
    },[dispatch, page])
    return (
        <MainDiv>
            <h2>Home</h2>
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
                    </li>)}
            </StyledList>
            {showBtn && !error && <ShowMoreBtn type='button' onClick={() => setPage(page + 1)}/>}
        </MainDiv>
    )
}