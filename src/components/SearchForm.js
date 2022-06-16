import Heading from "./common/Heading";
import styled from "styled-components";

const FormWrapper = styled.section`
  margin-bottom: 50px;
  h1 {
    color: #112a42;
    margin-bottom: 25px;
  }
`;

const Input = styled.input`
  border: none;
  width: 100%;
  max-width: 600px;
  height: 3rem;
  border-radius: 5px;
  padding-left: 10px;
  font-size: 20px;
`;

function SearchForm({ query, onSearch }) {
  return (
    <FormWrapper>
      <Heading>Search Movies</Heading>
      <form>
        <Input type="text" value={query} onChange={onSearch} />
      </form>
    </FormWrapper>
  );
}

export default SearchForm;
