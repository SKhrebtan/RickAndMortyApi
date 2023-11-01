import { useDispatch, useSelector } from "react-redux";
import { deleteFavoriteEpisode } from "components/redux/dataSlice";
import { DeleteButtonComponent } from "components/Buttons/DeleteButton";
export const HomeFavorite = () => {
    const { favoriteEpisodes } = useSelector(state => state.api);
    const dispatch = useDispatch();
    const value = 'character';
    return (
        <div>
            <h2>Favorite</h2>
            <ul>
                {favoriteEpisodes.map(({id,name,air_date, episode}) =>
                    <li key={episode}>
                        <p>{name}</p>
                        <p>{episode}</p>
                        <p>{air_date}</p>
                        <DeleteButtonComponent type='button' onClick={() => dispatch(deleteFavoriteEpisode({ value, id }))}/>
                        {/* <button type='button' onClick={() => dispatch(deleteFavoriteEpisode({ value, id }))}>Delete</button> */}
                    </li>)}
            </ul>
        </div>
        
    )
}