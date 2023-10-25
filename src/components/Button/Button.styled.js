import { styled } from "styled-components";

export const StyledButton = styled.button`
user-select: none;
display: block;
margin: auto;
font-size: 16px;
font-weight: 700;
color: ${p => p.theme.colors.snowCloud};
border: none;
padding: ${p => p.theme.spacing(4)} ${p => p.theme.spacing(6)};
 border-radius: 15px;
 background-color: ${p => p.theme.colors.glacier};
 transition: box-shadow 1000ms cubic-bezier(0.075, 0.82, 0.165, 1);
   &:hover, &:focus {
  transition: box-shadow 1000ms cubic-bezier(0.075, 0.82, 0.165, 1);
  box-shadow: rgba(0, 0, 0, 0.36) 0px 6px 16px;
   }
`