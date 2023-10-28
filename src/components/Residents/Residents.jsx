import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Resident } from "./Resident/Resident";
import { StyledList } from "./Residents.styled";
async function FetchLocationById(id)  {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/location/${id}`);
    return data
}
export const Residents = () => {
    const { locationId } = useParams();
    const [residents, setResidents] = useState(null);
    useEffect(() => {
        FetchLocationById(locationId).then(({residents}) => setResidents(residents))
    }, [locationId])
    return (
        <div>
            <h3>Residents</h3>
        <StyledList>
                {residents && residents.map(resident=><Resident key={resident} data={resident}/>)}
            </StyledList>
            </div>
    )
}