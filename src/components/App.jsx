import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Home } from "./Home/Home";
import { Characters } from "./Characters/Characters";
import { CharacterDetail } from "./CharacterDetail/CharacterDetail";
import { Locations } from "./Locations/Locations";
import { LocationDetail } from "./LocationDetail/LocationDetail";
import { Residents } from "./Residents/Residents";
import { SearchCharacter } from "./SearchCharacter/SearchCharacter";
import { HomeLayout } from "./Home/HomeLayout/HomeLayout";
import { HomeFavorite } from "./Home/HomeFavorite";
import { LocationLayout } from "./Locations/LocationLayout/LocationLayout";
import { LocationFavorite } from "./Locations/LocationFavorite/LocationFavorite";
import { FavoriteCharacters } from "./Characters/FavoriteCharacters/FavoriteCharacters";
export const App = () => {
  return (
   <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomeLayout/>}>
          <Route path="/" element={<Home />} />
          <Route path="home/favorite" element={<HomeFavorite/>} />
        </Route>
              {/* <Route index element={<Home/>} /> */}
        <Route path="characters" element={<Characters />}>
          <Route path="search-character" element={<SearchCharacter />} />
          <Route path="favorite-characters" element={<FavoriteCharacters/>}/>
        </Route>
        <Route path="characters/:characterId/" element={<CharacterDetail />} /> 
         <Route path="/locations" element={<LocationLayout/>}>
          <Route index element={<Locations />}/>   
          <Route path="favorite" element={<LocationFavorite/>} />
        </Route>
                    {/* <Route path="locations" element={<Locations />}/>                      */}
        <Route path="locations/:locationId/" element={<LocationDetail />}>
        <Route path="residents" element={<Residents/>} />
        </Route>
        <Route path="search" element={<SearchCharacter />} /> 
          </Route>
          </Routes>
  );
};
