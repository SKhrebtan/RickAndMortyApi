import { useSearchParams,  useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { StyledMainDiv,StyledList,StyledLink } from "./SearchCharacter.styled";

import axios from "axios";

async function FetchByName(name,page)  {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}&page=${page}`);
    return data
}
export const SearchCharacter = () => {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const [characters, setCharacters] = useState([]);
    const [showBtn, setShowBtn] = useState(false);
    const [page, setPage] = useState(1);
    const query = searchParams.get('query');
   
    const handleSubmit = e => {
        e.preventDefault();
        setSearchParams({
            query: e.currentTarget.elements.searchValue.value,
            page
        });
        setPage(1);
        e.target.reset();
    }

    useEffect(() => {
        if (!query) return;
        FetchByName(query, page).then(({ results, info }) => {
            if (info.pages > 1) {
                setShowBtn(true)
            }
           
            if (info.pages === page) {
                setShowBtn(false)
            }
            setCharacters(prevResults => {
            
                return page === 1 ? results : [...prevResults, ...results]
            })
        })
    })
    return (
        <StyledMainDiv>
            <h3>Search character</h3>
             <form onSubmit={handleSubmit}>
            <label>
                <input type='text' name='searchValue'/>
            </label>
            <button type="submit">Search</button>
            </form>
            {characters && <StyledList>
                {characters.map(({ id, name, image }) =>
                    <StyledLink key={id} to={`/characters/${id}/`} state={{ from: location }}>
                      <li key={id}>
                                                <p>{name}</p>
                            <img src={image} alt={name} />
                                                    </li>
                        </StyledLink>
             
                    )}
            </StyledList>}
            {showBtn && <button className='show-btn' type='button' onClick={() => setPage(page + 1) }>Load more</button>}
        </StyledMainDiv>
       
    )
}
