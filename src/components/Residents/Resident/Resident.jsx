import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

async function FetchCharacter(url) {
    const { data } = await axios.get(`${url}`);
    return data
}

export const Resident = ({ data }) => {
    const [character, setCharacter] = useState(null);
    useEffect(() => {
        FetchCharacter(data).then(data => setCharacter(data))
    }, [data])
   
    return (
        character && (<Link to={`/characters/${character.id}`} key={character.id}>
            <li>
                <p>{character.name}</p>
            </li>
        </Link>)
       
    )
}