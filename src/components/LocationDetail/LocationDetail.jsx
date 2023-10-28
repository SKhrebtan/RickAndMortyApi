import { useState, useEffect,Suspense } from "react";
import { useParams, Outlet,NavLink } from "react-router-dom";
import axios from "axios";

async function FetchLocationById(id)  {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/location/${id}`);
    return data
}

export const LocationDetail = () => {
    const { locationId } = useParams();
    const [location, setLocation] = useState(null);
    useEffect(() => {
        FetchLocationById(locationId).then(data => setLocation(data))
    }, [locationId])
    return (
          <div>
            {location &&
                            <>
                    <h2>{location.name}</h2>
            <p>{location.type}</p>
                <p>{location.dimension}</p>
                 <NavLink to="residents">Residents</NavLink>
                 <Suspense fallback="isLoading">
                 <Outlet/>
                </Suspense>
                </>
            
            }
        </div>
    )
}