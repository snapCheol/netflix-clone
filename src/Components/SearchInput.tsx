import React, { useCallback } from 'react';
import styled from 'styled-components';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';

type FormProps = {
  activeSearch: boolean;
};

const Form = styled.form<FormProps>`
  display: flex;
  width: ${(props) => (props.activeSearch ? 'auto' : 0)};
  padding: 0 10px 0 20px;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.85);
  margin-right: 25px;
  transition: all 0.3s ease;
`;
const Search = styled.input`
  height: 34px;
  line-height: 34px;
  padding: 7px 14px 7px 7px;
  background: transparent;
  outline: none;
  color: #fff;
  border: none;
`;
const CloseButton = styled.button``;

type SearchInput = {
  activeSearch: boolean;
  setActiveSearch: (activeSearch: boolean) => void;
};

const SearchInput = ({ activeSearch, setActiveSearch }: SearchInput) => {
  const closeSearchInput = useCallback(() => {
    setActiveSearch(false);
  }, [setActiveSearch]);
  return (
    <Form activeSearch={activeSearch}>
      <SearchOutlined />
      <Search type="text" onBlur={closeSearchInput} autoFocus />
      <CloseButton>
        <CloseOutlined />
      </CloseButton>
    </Form>
  );
};

export default SearchInput;
