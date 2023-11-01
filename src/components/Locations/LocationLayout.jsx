import { NavLink, Outlet } from "react-router-dom"
import { Suspense } from "react";

export const LocationLayout = () => {
    
    return (
        <div>
            <NavLink to="/locations"><h2>Locations</h2></NavLink>
            <NavLink to="/locations/favorite"><h2>Favorite</h2></NavLink>
           
             <Suspense fallback="Loading">
                    <Outlet />
                </Suspense>
            </div>
    )
}