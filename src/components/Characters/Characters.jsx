import { useState, useEffect,Suspense } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import { StyledList, StyledLi, StyledMainDiv } from "./Characters.styled";
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
        <StyledMainDiv>
            <h2>Characters</h2>
            <StyledList>
                {characters.map(({ id, name, image }) =>
                                        <StyledLi key={id}>
                        <Link to={`/characters/${id}`} >
                        <p>{name}</p>
                        <img src={image} alt={name} />
                        </Link>
                    </StyledLi>
                    )}
            </StyledList>
            {!lastPage && <button className='more-btn' type='button' onClick={() => setPage(page + 1)}>Load more</button>}
            <div className='suspense-div'>
            <NavLink to="search-character">Search</NavLink>
                 <Suspense fallback="isLoading">
                 <Outlet/>
                </Suspense></div>
             
        </StyledMainDiv>
    )
}