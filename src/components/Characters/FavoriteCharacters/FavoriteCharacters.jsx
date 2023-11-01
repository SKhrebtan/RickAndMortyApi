import { StyledList,StyledLink,StyledLi } from "../Characters.styled"
import { useSelector, useDispatch } from "react-redux";
import { deleteFavoriteEpisode } from "components/redux/dataSlice";
import { DeleteButtonComponent } from "components/Buttons/DeleteButton";
export const FavoriteCharacters = () => {
    const { favoriteCharacters } = useSelector(state => state.api);
    const dispatch = useDispatch();
    const value = 'character';
    return (
        <StyledList>
                {favoriteCharacters.length > 0 && favoriteCharacters.map(({ id, name, image }) =>
                    
                                        <StyledLi key={id}>
                        <StyledLink key={id} to={`/characters/${id}`} >
                                                <p>{name}</p>
                        <img src={image} alt={name} />
                        </StyledLink>
                        <DeleteButtonComponent type='button' onClick={() => dispatch(deleteFavoriteEpisode({ value, id }))}/>
                         {/* <button type='button' onClick={() => dispatch(deleteFavoriteEpisode({ value, id }))}>Delete</button> */}
                        </StyledLi>
                       
                         
                    )}
            </StyledList>
    )
}