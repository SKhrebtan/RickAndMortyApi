import { StyledShowMoreBtn } from "./ShowMoreBtn.styled";

export const ShowMoreBtn = ({ type, onClick }) => {
  
    return (
        <StyledShowMoreBtn type={type} onClick={()=> onClick()}>Load More</StyledShowMoreBtn>
    )
}