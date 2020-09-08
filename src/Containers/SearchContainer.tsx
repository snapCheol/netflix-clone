import React from 'react';
import SearchPresenter from '../Components/SearchPresenter';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/modules';
import Main from '../Components/Main';

const SearchContainer = () => {
  const { loading, data, error } = useSelector(
    (state: RootState) => state.search
  );
  return (
    <Main>
      <SearchPresenter data={data} loading={loading} error={error} />
    </Main>
  );
};

export default SearchContainer;
