import { styled } from "styled-components";

export const StyledSearchbar = styled.div`
position: fixed;
z-index: 1000;
width: 100%;
padding: 24px 0 24px;
background-color: ${p => p.theme.colors.glacier};
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const FieldWrapper = styled.div`
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
  :hover, :focus {
  transition: box-shadow 1000ms cubic-bezier(0.075, 0.82, 0.165, 1);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 16px;
}
`

export const Field = styled.input`
  font-size: 24px;
  color: darkslategray;
  width: 88%;
  padding: 16px 0 16px 16px;
  border: none;
  outline: none;
  `

export const SearchButton = styled.button`
 width: 12%;
  padding: 16px 0 16px 0;
  border: none;
  background-color: ${p => p.theme.colors.blueIce};
  cursor: pointer;
  fill: ${p => p.theme.colors.glacier};
  transition: fill 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover,
  focus {
  fill: var(--snow-cloud);
  transition: fill 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`