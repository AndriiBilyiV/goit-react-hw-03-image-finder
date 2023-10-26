import { styled } from "styled-components";

export const List = styled.ul`
user-select: none;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  column-gap: 24px;
  row-gap: 36px;
  margin-bottom:  ${p => p.theme.spacing(6)};
`

export const ListItem = styled.li`
     max-width: 360px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`