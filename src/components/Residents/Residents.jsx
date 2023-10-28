import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Resident } from "./Resident/Resident";
async function FetchLocationById(id)  {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/location/${id}`);
    return data
}
export const Residents = () => {
    const { locationId } = useParams();
    console.log(locationId)
    const [residents, setResidents] = useState(null);
    useEffect(() => {
        FetchLocationById(locationId).then(({residents}) => setResidents(residents))
    }, [locationId])
    return (
        <div>
            <h3>Residents</h3>
        <ul>
                {residents && residents.map(resident=><Resident key={resident} data={resident}/>)}
            </ul>
            </div>
    )
}