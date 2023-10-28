import { useState, useEffect } from "react";
import { StyledList, StyledLink } from "./Locations.styled";
import axios from "axios";

async function FetchLocations()  {
    const { data } = await axios.get('https://rickandmortyapi.com/api/location');
    return data
}

export const Locations = () => {
    const [locations, setLocations] = useState(null);

    useEffect(() => {
        FetchLocations().then(({results})=>setLocations(results))
    },[])
    return (
        <div>
            <h2>Locations</h2>
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
        </div>
    )
}