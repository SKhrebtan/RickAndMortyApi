import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

async function FetchCharacterById(id)  {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    return data
}

export const CharacterDetail = () => {
    const { characterId } = useParams();
    const [character, setCharacter] = useState(null);
    useEffect(() => {
        FetchCharacterById(characterId).then(data => setCharacter(data))
    }, [characterId])
    return (
          <div>
            {character && <>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
           <p>{character.species}</p>
            <p>{character.status}</p></>
            }
        </div>
    )
}