import { DeleteButton } from "./DeleteButton.styled";

export const DeleteButtonComponent = ({onClick}) => {

    return (
        <DeleteButton onClick={()=>onClick()}>Delete</DeleteButton>
    )
}