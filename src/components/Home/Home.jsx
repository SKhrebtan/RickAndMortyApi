import { useState, useEffect } from "react";
import axios from "axios";

async function FetchSeries()  {
    const { data } = await axios.get('https://rickandmortyapi.com/api/episode');
    return data
}


export const Home = () => {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        FetchSeries().then(({ results }) => setSeries(results)).catch(error => console.log(error.message))
    },[])
    return (
        <div>
            <h2>Home</h2>
            <ul>
                {series.map(({id,name}) =>
                    <li key={id}>
                        <p>{name}</p>
                        <p>{}</p>
                    </li>)}
            </ul>
        </div>
    )
}