import { useState, useEffect } from "react";
import axios from "axios";
import { StyledList } from "./Home.styled";

async function FetchSeries(page)  {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`);
    return data
}


export const Home = () => {
    const [series, setSeries] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(null);
    useEffect(() => {
        FetchSeries(page).then(({ results, info }) => {
            setSeries(prevResults => page === 1 ? results : [...prevResults, ...results])
            if (info.pages === page) {
                setLastPage(true)
            }
        }).catch(error => console.log(error.message))
    },[page])
    return (
        <div>
            <h2>Home</h2>
            <StyledList>
                {series.map(({id,name,air_date, episode}) =>
                    <li key={episode}>
                        <p>{name}</p>
                        <p>{episode}</p>
                        <p>{air_date}</p>
                    </li>)}
            </StyledList>
            {!lastPage &&  <button type='button' onClick={()=>setPage(page + 1)}>Load more</button>}
        </div>
    )
}