import Heading from "./common/Heading";
import styled from "styled-components";

const StyledSearchForm = styled.section`
    margin-bottom: 50px;
    h1 {
      color: #112a42;
      margin-bottom: 25px;
    }
    form {
      input {
        border: none;
        width: 100%;
        max-width: 600px;
        height: 45px;
        border-radius: 5px;
        padding-left: 10px;
        font-size: 20px;
      }
    }
`;

function SearchForm({query, onSearch}){
    return (
        <StyledSearchForm>
            <Heading level={1} size={40}>Search Movies</Heading>
            <form>
                <input 
                    type="text" 
                    value={query}
                    onChange={onSearch}
                />
            </form>    
        </StyledSearchForm>
    )
}

export default SearchForm;