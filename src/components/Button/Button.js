import { StyledButton } from "./Button.styled"

export const Button = ({handleClick}) => {
    return (
        <StyledButton onClick={() => handleClick()}>Load more</StyledButton>
    )
}