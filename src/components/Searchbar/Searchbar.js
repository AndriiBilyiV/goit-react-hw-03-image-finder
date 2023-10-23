import { Field, FieldWrapper, SearchButton, StyledSearchbar } from "./Searchbar.styled"
import { BsSearch } from 'react-icons/bs';


export const Searchbar = () => {
    return (
        <StyledSearchbar>
            <FieldWrapper>
            <Field />
            <SearchButton>
                <BsSearch/>
                </SearchButton>
            </FieldWrapper>
       </StyledSearchbar>
    )
}