import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

async function FetchCharacters()  {
    const { data } = await axios.get('https://rickandmortyapi.com/api/character');
    return data
}


export const Characters = () => {
     const [characters, setCharacters] = useState([]);

    useEffect(() => {
        FetchCharacters().then(({results})=> setCharacters(results))
    },[])
    return (
        <div>
            <h2>Characters</h2>
            <ul>
                {characters.map(({ id, name, image }) =>
                    <Link to={`/characters/${id}`} key={id}>
                    <li key={id}>
                        <p>{name}</p>
                        <img src={image} alt={name} />
                    </li></Link>
                    )}
            </ul>
        </div>
    )
}