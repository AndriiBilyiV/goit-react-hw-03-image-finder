import { StyledInput, StyledForm, SearchButton, StyledSearchbar, IconWrapper, Header } from "./Searchbar.styled"
import { BsSearch } from 'react-icons/bs';
import { Formik} from "formik";


export const Searchbar = ({onSubmit}) => {
    return (
        <>
      
            <StyledSearchbar>
            <Formik
                initialValues={{
                    input: ''
                }}
                onSubmit={(values) => {
                    onSubmit(values.input)
            }}
            >
                <StyledForm>
                    <StyledInput
                        name="input"
                        placeholder="Search images and photos"
                />
                    <SearchButton type="submit">
                        <IconWrapper>

                           <BsSearch size="24" /> 
                        </IconWrapper>
                    </SearchButton>
                </StyledForm>
                 </Formik>
            </StyledSearchbar>
            <Header />
       </>
    )
}