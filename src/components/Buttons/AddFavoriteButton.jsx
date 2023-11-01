import { AddFavoriteButton } from "./AddFavoriteButton.styled"

export const AddFavoriteButtonComponent = ({onClick}) => {

    return (
        <AddFavoriteButton onClick={()=>onClick()}>Add to Favorite</AddFavoriteButton>
    )
}