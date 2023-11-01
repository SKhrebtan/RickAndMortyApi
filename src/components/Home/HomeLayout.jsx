import { NavLink, Outlet } from "react-router-dom"
import { Suspense } from "react";

export const HomeLayout = () => {
    
    return (
        <div>
            <NavLink to="/"> <h2>Home</h2></NavLink>
            <NavLink to="/home/favorite"><h2>Favorite</h2></NavLink>
        
             <Suspense fallback="Loading">
                    <Outlet />
                </Suspense>
            </div>
    )
}