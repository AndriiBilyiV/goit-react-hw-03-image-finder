import { styled } from "styled-components";
import { Field, Form  } from "formik";

export const Header = styled.div`
height: 140px;
`

export const StyledSearchbar = styled.div`
position: fixed;
z-index: 100;
width: 100%;
padding: ${p => p.theme.spacing(6)} 0;
background-color: ${p => p.theme.colors.glacier};
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const StyledForm = styled(Form)`
  user-select: none;
  max-width: 400px;
  margin: auto;
  display: flex;
  gap: 0;
  justify-content: center;
  border: 4 solid ${p => p.theme.colors.glacier};
  border-radius: 15px;
  overflow: hidden;
  transition: box-shadow 1000ms cubic-bezier(0.075, 0.82, 0.165, 1);
  box-shadow: none;
  &:hover, &:focus {
  transition: box-shadow 1000ms cubic-bezier(0.075, 0.82, 0.165, 1);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 16px;
}
`

export const StyledInput = styled(Field)`
  font-size: 24px;
  color: darkslategray;
  width: 88%;
  padding: ${p => p.theme.spacing(4)} 0 ${p => p.theme.spacing(4)} ${p => p.theme.spacing(4)};
  border: none;
  outline: none;
  `

export const SearchButton = styled.button`
 width: 12%;
  padding: ${p => p.theme.spacing(4)} 0;
  border: none;
  background-color: ${p => p.theme.colors.blueIce};
  cursor: pointer;
`

export const IconWrapper = styled.div`
transition: color 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
color: ${p => p.theme.colors.glacier};
&:hover, &:focus {
  color: ${p => p.theme.colors.snowCloud};
  transition: color 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }

`