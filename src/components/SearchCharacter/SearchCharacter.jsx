import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  StyledMainDiv,
  StyledList,
  StyledLink,
  StyledShowButton
} from './SearchCharacter.styled';
import { getSearchCharacterThunk } from 'components/redux/dataSlice';
import { useSelector, useDispatch } from 'react-redux';
import { CirclesWithBar } from 'react-loader-spinner';
import { FcSearch } from 'react-icons/fc';
import { ShowMoreBtn } from 'components/Buttons/ShowMoreBtn';
import { clearCharacters } from 'components/redux/dataSlice';
import { getFavoriteEpisodeThunk } from 'components/redux/dataSlice';
import { StyledLi } from 'components/Characters/Characters.styled';
import { deleteFavoriteEpisode } from 'components/redux/dataSlice';
import { DeleteButtonComponent } from 'components/Buttons/DeleteButton';
import { AddFavoriteButtonComponent } from "components/Buttons/AddFavoriteButton";
export const SearchCharacter = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [showFavorite, setShowFavorite] = useState(false);
  const query = searchParams.get('query');
  const { searchCharacters, error, isLoading, showBtn,favoriteCharacters } = useSelector(
    state => state.api
  );
  const value = 'character';

  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({
      query: e.currentTarget.elements.searchValue.value,
      page,
    });
    setPage(1);

    e.target.reset();
  };

  useEffect(() => {
    if (!query) {
      dispatch(clearCharacters());
      return;
    }
    dispatch(getSearchCharacterThunk({ page, query }));
  }, [dispatch, page, query]);
  return (
    <StyledMainDiv>
      <h3>Search character</h3>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">
          <input className="input" type="text" name="searchValue" />
        </label>
        <button className="submit-btn" type="submit" onClick={()=>setShowFavorite(true)}>
                    Search <FcSearch size={20} />
        </button>
        <StyledShowButton type='button' onClick={() =>setShowFavorite(!showFavorite)}>{showFavorite ? 'show Favorites' : 'hide Favorite'}</StyledShowButton>
      </form>
      {isLoading && (
        <CirclesWithBar
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass="loader"
          visible={true}
          outerCircleColor=""
          innerCircleColor=""
          barColor=""
          ariaLabel="circles-with-bar-loading"
        />
      )}
      {error && <h3>Bad value request</h3>}
      {searchCharacters && !error && (
        <StyledList>
          {showFavorite ? searchCharacters.map(({ id, name, image }) => (
              <li className='liwka' key={id}>
                <StyledLink key={id} to={`/characters/${id}/`}>
                  <p className='name'>{name}</p>
                  <img className="image" src={image} alt={name} />
              </StyledLink>
              <AddFavoriteButtonComponent    type="button"
                  onClick={() => dispatch(getFavoriteEpisodeThunk({ value, id }))}/>
                {/* <button
                  type="button"
                  onClick={() => dispatch(getFavoriteEpisodeThunk({ value, id }))}
                >
                  Add to favorite
                </button> */}
              </li>
            ))
          : favoriteCharacters.length > 0 && favoriteCharacters.map(({ id, name, image }) =>
                    
                                        <StyledLi key={id}>
                        <StyledLink key={id} to={`/characters/${id}`} >
                                                <p className='name'>{name}</p>
                        <img className='image' src={image} alt={name} />
              </StyledLink>
              <DeleteButtonComponent type='button' onClick={() => dispatch(deleteFavoriteEpisode({ value, id }))}/>
                         {/* <button type='button' onClick={() => dispatch(deleteFavoriteEpisode({ value, id }))}>Delete</button> */}
                        </StyledLi>
                       
                         
                    )}
        </StyledList>
      )}
      {showFavorite && showBtn && searchCharacters.length > 1 && !error && (
        <ShowMoreBtn
          type="button"
          onClick={() => {
            setPage(page + 1);
          }}
        />
      )}
    </StyledMainDiv>
  );
};
