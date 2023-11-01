import { useDispatch, useSelector } from "react-redux";
import { deleteFavoriteEpisode } from "components/redux/dataSlice";
import { Link } from "react-router-dom";
import { DeleteButtonComponent } from "components/Buttons/DeleteButton";
export const LocationFavorite = () => {
    const { favoriteLocations } = useSelector(state => state.api);
    const value = 'location';
    const dispatch = useDispatch();
    return (
        <div>
                  <ul>
                {favoriteLocations.length > 0 && favoriteLocations.map(({ id, name, type, dimension }) =>
                          <li key={id}>
                        <Link to={`/locations/${id}`}>
                         <p>Name: {name}</p>
                            <p>Type: {type}</p>
                            <p>Dimension: {dimension}</p>
                        </Link>
                         <DeleteButtonComponent type='button' onClick={() => dispatch(deleteFavoriteEpisode({ value, id }))}/>
                        {/* <button type='button' onClick={() => dispatch(deleteFavoriteEpisode({ value, id }))}>Delete</button> */}
                    </li>)}
            </ul>
        </div>
        
    )
}