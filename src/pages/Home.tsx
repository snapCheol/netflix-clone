import React, { useEffect } from 'react';
import Main from '../Components/Main';
import HomeContainer from '../Containers/HomeContainer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrendAllDay } from '../redux/modules/trending/actions';

const Home = () => {
  const data = useSelector((state) => state);
  console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrendAllDay());
  }, [dispatch]);
  return (
    <Main>
      <HomeContainer />
    </Main>
  );
};

export default Home;
