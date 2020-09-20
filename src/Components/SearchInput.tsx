import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import { fetchSearch } from '../redux/modules/search';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

type FormProps = {
  activeSearch: boolean;
};

const Form = styled.form<FormProps>`
  display: flex;
  width: ${(props) => (props.activeSearch ? '250px' : 0)};
  padding: 0 10px 0 20px;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.85);
  margin-right: 3%;
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
  const history = useHistory();
  const dispatch = useDispatch();

  const [value, setValue] = useState('');
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      history.push('/search');
      dispatch(fetchSearch(value));
    },
    [history, dispatch, value]
  );

  const closeSearchInput = useCallback(() => {
    setActiveSearch(false);
  }, [setActiveSearch]);
  return (
    <Form onSubmit={onSubmit} activeSearch={activeSearch}>
      <SearchOutlined />
      <Search
        type="text"
        value={value}
        onBlur={closeSearchInput}
        onChange={onChange}
        autoFocus
      />
      <CloseButton>
        <CloseOutlined />
      </CloseButton>
    </Form>
  );
};

export default SearchInput;
