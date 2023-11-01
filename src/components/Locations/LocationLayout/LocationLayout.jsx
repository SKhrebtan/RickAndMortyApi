import {  Outlet } from "react-router-dom"
import { Suspense } from "react";
import { StyledLinksBlock, StyledNavLinkTitle } from './LocationLayout.styled'

export const LocationLayout = () => {
    
    return (
        <div>
                <StyledLinksBlock>
            <StyledNavLinkTitle to="/locations" end>Locations</StyledNavLinkTitle>
            <StyledNavLinkTitle to="/locations/favorite">Favorite</StyledNavLinkTitle>
            </StyledLinksBlock>
            
             <Suspense fallback="Loading">
                    <Outlet />
                </Suspense>
            </div>
    )
}