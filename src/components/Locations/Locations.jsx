import { useState, useEffect } from "react";
import { StyledList, StyledLink } from "./Locations.styled";
import { getLocationsThunk } from "components/redux/dataSlice";
import { useSelector, useDispatch } from "react-redux";
import { CirclesWithBar } from 'react-loader-spinner';

export const Locations = () => {
    const [page, setPage] = useState(1);
    const {locations, error, isLoading, showBtn} = useSelector(state=>state.api);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLocationsThunk(page))
    },[dispatch, page])
    return (
        <div>
            <h2>Locations</h2>
              {error && <h3>Something went wrong!</h3>}
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
            <StyledList>
                {locations && locations.map(({ id, name, type,dimension }) =>
                    
                    <li key={id}>
                        <StyledLink to={`/locations/${id}`}>
                        <p>Name: {name}</p>
                            <p>Type: {type}</p>
                            <p>Dimension: {dimension}</p>
                            </StyledLink>
                    </li>
                    )}
            </StyledList>
            {showBtn && !error && <button className='more-btn' type='button' onClick={() => setPage(page + 1)}>Load more</button>}
        </div>
    )
}