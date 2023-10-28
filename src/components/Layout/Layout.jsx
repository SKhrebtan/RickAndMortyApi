import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <div>
            <header>
                 <nav> 
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/characters">Characters</NavLink></li>
                        <li><NavLink to="/locations">Locations</NavLink></li>
            </ul>
            </nav>  
            </header>
            
            <main>
                <Suspense fallback="Loading">
                    <Outlet />
                </Suspense>
            </main>
            <footer></footer>
            
        </div>
       
    )
}