import { useState, useEffect,Suspense } from "react";
import { Link,Outlet, NavLink } from "react-router-dom";
import axios from "axios";

async function FetchCharacters(page)  {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
    return data
}


export const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(null);

    useEffect(() => {
        FetchCharacters(page).then(({ results, info }) => {
            setCharacters(prevCharacters => page === 1 ? results : [...prevCharacters, ...results]);
            if (page === info.pages) {
                 setLastPage(true)
             }
        })
    },[page])
    return (
        <div>
            <h2>Characters</h2>
            <ul>
                {characters.map(({ id, name, image }) =>
                    <Link to={`/characters/${id}`} key={id}>
                    <li>
                        <p>{name}</p>
                        <img src={image} alt={name} />
                    </li></Link>
                    )}
            </ul>
            {!lastPage && <button type='button' onClick={() => setPage(page + 1)}>Load more</button>}
            <>
            <NavLink to="search-character">Search</NavLink>
                 <Suspense fallback="isLoading">
                 <Outlet/>
                </Suspense></>
             
        </div>
    )
}