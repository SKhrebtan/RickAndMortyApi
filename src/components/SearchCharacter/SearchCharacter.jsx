import { useSearchParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

async function FetchByName(name)  {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`);
    return data
}
export const SearchCharacter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [characters, setCharacters] = useState(null);
    const query = searchParams.get('query');
    const handleSubmit = e => {
        e.preventDefault();
        setSearchParams({ query: e.currentTarget.elements.searchValue.value });
        e.target.reset();
    }

    useEffect(() => {
        if (!query) return;
        FetchByName(query).then(({results})=>setCharacters(results))
    },[query])
    return (
        <>
            <h3>Search character</h3>
             <form onSubmit={handleSubmit}>
            <label>
                <input type='text' name='searchValue'/>
            </label>
            <button type="submit">Search</button>
            </form>
            {characters && <ul>
                {characters.map(({ id, name, image }) =>
                    <Link to={ `/characters/${id}/`} key={id}>
                        <li key={id}>
                            <p>{name}</p>
                            <img src={image} alt={name}/>
                    </li>
                    </Link>
                    )}
            </ul>}
        </>
       
    )
}