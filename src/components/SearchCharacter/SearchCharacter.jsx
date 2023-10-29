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
    const query = searchParams.get('query');
    const currentPage = searchParams.get('page');
   
    const handleSubmit = e => {
        e.preventDefault();
        setSearchParams({
            query: e.currentTarget.elements.searchValue.value,
            page: 1,
        });
        e.target.reset();
    }

    useEffect(() => {
        if (!query) return;
        FetchByName(query,currentPage).then(({ results,info }) => {
                      if (info.pages > 1) {
                setShowBtn(true)
            }
            console.log(info.pages)
             console.log(currentPage)
            if (info.pages === Number(currentPage)) {
                setShowBtn(false)
            }
                setCharacters(prevResults => currentPage === '1' ? results : [...prevResults, ...results])
        })
    }, [query, currentPage])
    
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
            {showBtn && <button className='show-btn' type='button' onClick={() => {
                                setSearchParams({ query, page: Number(currentPage) + 1 });
            }}>Load more</button>}
        </StyledMainDiv>
       
    )
}