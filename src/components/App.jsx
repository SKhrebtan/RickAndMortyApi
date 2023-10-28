import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Home } from "./Home/Home";
import { Characters } from "./Characters/Characters";
import { CharacterDetail } from "./CharacterDetail/CharacterDetail";
import { Locations } from "./Locations/Locations";
import { LocationDetail } from "./LocationDetail/LocationDetail";
import { Residents } from "./Residents/Residents";

export const App = () => {
  return (
   <Routes>
        <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path="characters" element={<Characters />} />
               <Route path="characters/:characterId/" element={<CharacterDetail />} /> 
                    <Route path="locations" element={<Locations />}/>                     
        <Route path="locations/:locationId/" element={<LocationDetail />}>
        <Route path="residents" element={<Residents/>} />
        </Route>
          </Route>
          </Routes>
  );
};
