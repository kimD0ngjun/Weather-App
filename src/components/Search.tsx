import styled, { css } from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { LuMapPin } from "react-icons/lu";

const LocationIcon = styled(LuMapPin)`
  color: #555;
  width: 20rem;
  height: 20rem;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16rem;
`;

const SearchButton = styled.button`
  background-color: #3498db;
  border: none;
  border-radius: 5rem;
  padding: 8rem 16rem;
  cursor: pointer;
  color: #fff;

  &:hover {
    background-color: #267bb6;
  }

  &:active {
    transform: translateY(2rem);
  }
`;

const SearchIcon = styled(AiOutlineSearch)`
  width: 20rem;
  height: 20rem;
`;

const SearchBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10rem;
  padding: 10rem;
  background-color: #fff;
  border-radius: 5rem;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.1);
`;

const SearchBox = () => {
  return (
    <SearchBoxWrapper>
      <LocationIcon />
      <Input type="text" placeholder="Enter your location" />
      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </SearchBoxWrapper>
  );
};

export default SearchBox;
