import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
            <ul>
                {locations && locations.map(({ id, name, type,dimension }) =>
                    <Link to={`/locations/${id}`} key={id}>
                    <li key={id}>
                        <p>Name: {name}</p>
                            <p>Type: {type}</p>
                            <p>Dimension: {dimension}</p>
                    </li></Link>
                    )}
            </ul>
        </div>
    )
}