import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Nav, List, StyledNavLink } from "./Layou.styled";
export const Layout = () => {
    return (
        <div>
            <header>
                 <Nav> 
            <List>
                <li><StyledNavLink to="/">Home</StyledNavLink></li>
                        <li><StyledNavLink to="/characters">Characters</StyledNavLink></li>
                        <li><StyledNavLink to="/locations">Locations</StyledNavLink></li>
                        <li><StyledNavLink to="/search">Search</StyledNavLink></li>
            </List>
            </Nav>  
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