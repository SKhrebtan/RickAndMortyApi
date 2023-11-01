import { Outlet } from "react-router-dom"
import { Suspense } from "react";
import { StyledNavLinkTitle,StyledLinksBlock } from "./HomeLayout.styled";
export const HomeLayout = () => {
    
    return (
        <div>
            <StyledLinksBlock>
                <StyledNavLinkTitle to="/">Home</StyledNavLinkTitle>
            <StyledNavLinkTitle to="/home/favorite">Favorite</StyledNavLinkTitle>
            </StyledLinksBlock>
            
        
             <Suspense fallback="Loading">
                    <Outlet />
                </Suspense>
            </div>
    )
}