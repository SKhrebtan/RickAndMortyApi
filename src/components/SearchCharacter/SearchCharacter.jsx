import { useSearchParams,  useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { StyledMainDiv,StyledList,StyledLink } from "./SearchCharacter.styled";
import { getSearchCharacterThunk } from "components/redux/dataSlice";
import { useSelector, useDispatch } from "react-redux";
import { CirclesWithBar } from 'react-loader-spinner';
import {FcSearch} from 'react-icons/fc';

export const SearchCharacter = () => {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
      const [page, setPage] = useState(1);
    const query = searchParams.get('query');
    const { searchCharacters, error, isLoading, showBtn } = useSelector(state => state.api);
       const dispatch = useDispatch();
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
        dispatch(getSearchCharacterThunk({page,query}))
    },[dispatch, page, query])
    return (
        <StyledMainDiv>
            <h3>Search character</h3>
             <form className='form' onSubmit={handleSubmit}>
            <label className='label'>
                <input className='input' type='text' name='searchValue'/>
            </label>
                <button className='submit-btn' type="submit">Search <FcSearch size={20} /></button>
            </form>
                       {isLoading && <CirclesWithBar
  height="100"
  width="100"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  outerCircleColor=""
  innerCircleColor=""
  barColor=""
  ariaLabel='circles-with-bar-loading'
            />}
            {error && <h3>Bad value request</h3>}
            {searchCharacters && !error && <StyledList>
                {searchCharacters.map(({ id, name, image }) =>
                    <StyledLink key={id} to={`/characters/${id}/`} state={{ from: location }}>
                      <li key={id}>
                                                <p>{name}</p>
                            <img className='image' src={image} alt={name} />
                                                    </li>
                        </StyledLink>
             
                    )}
            </StyledList>}
 
            {showBtn && <button className='show-btn' type='button' onClick={() => setPage(page + 1) }>Load more</button>}
        </StyledMainDiv>
       
    )
}
