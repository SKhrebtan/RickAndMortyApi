import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { StyledMainDiv,StyledList,StyledLink } from "./SearchCharacter.styled";
import { getSearchCharacterThunk } from "components/redux/dataSlice";
import { useSelector, useDispatch } from "react-redux";
import { CirclesWithBar } from 'react-loader-spinner';
import { FcSearch } from 'react-icons/fc';
import { ShowMoreBtn } from "components/ShowMoreBtn/ShowMoreBtn";
import { addLocation } from "components/redux/dataSlice";
export const SearchCharacter = () => {
    
    const [searchParams, setSearchParams] = useSearchParams();
      const [page, setPage] = useState(1);
        const query = searchParams.get('query');
     const { searchCharacters, error, isLoading, showBtn, characterSearchParams } = useSelector(state => state.api);
    const currentPage = searchParams.get('page');
    
       const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        setSearchParams({
            query: e.currentTarget.elements.searchValue.value,
            page
        });
        setPage(1);
        dispatch(addLocation({page:1, query: e.currentTarget.elements.searchValue.value}))
        
        e.target.reset();
    }
    useEffect(() => {
        if (characterSearchParams) {
            
            const { query, page } = characterSearchParams;
             setSearchParams({
            query,
            page,
        });
        }
},[characterSearchParams, setSearchParams])
    useEffect(() => {
        if (!query) return;
                     dispatch(getSearchCharacterThunk({ page, query }))
                       
    },[ dispatch, page, query])
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
                    <StyledLink key={id} to={`/characters/${id}/`}>
                      <li key={id}>
                                                <p>{name}</p>
                            <img className='image' src={image} alt={name} />
                                                    </li>
                        </StyledLink>
             
                    )}
            </StyledList>}
            {/* {showBtn && !error && <button className='more-btn' type='button' onClick={() => {
                dispatch(addLocation({page: page + 1, query}))
                setPage(page + 1)
                }}>Load more</button>} */}
            {showBtn && searchCharacters.length > 1 && !error &&<ShowMoreBtn type='button' onClick={() => {
                dispatch(addLocation({page: Number(currentPage) + 1, query}))
                setPage(Number(currentPage) + 1)
                }} />}
        </StyledMainDiv>
       
    )
}
