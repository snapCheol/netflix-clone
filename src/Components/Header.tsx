import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import Inner from './Inner';
import Logo from './Logo';
import Navigation from './Navigation';
import FuncMenu from './FuncMenu';
import { breakPoint, device } from '../styles/BreakPoint';
import MobileNavigation from './MobileNavigation';
import { RootState } from '../redux/modules';
import { useSelector, useDispatch } from 'react-redux';
import { viewPortMobile, viewPortPc } from '../redux/modules/common';
import { MenuOutlined } from '@ant-design/icons';

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: #000;
  z-index: 999;
  & > div {
    position: relative;
    height: 100%;
    align-items: center;
  }

  @media ${device.laptop} {
    height: 70px;
  }
`;

const MenuButton = styled.button`
  width: 30px;
  height: 30px;
  color: #fff;
  font-size: 20px;
  margin-right: 20px;
`;

const Header = () => {
  const { viewPort } = useSelector((state: RootState) => state.common);
  console.log(viewPort);
  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);

  const [activeNav, setActiveNav] = useState(false);

  const toggleNav = useCallback(() => {
    setActiveNav((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);

    if (width > breakPoint.tablet) {
      if (viewPort === 'pc') return;
      dispatch(viewPortPc());
    } else if (width < breakPoint.tablet) {
      if (viewPort === 'mobile') return;
      dispatch(viewPortMobile());
    }

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [dispatch, width, viewPort]);

  return (
    <Container>
      <Inner>
        {viewPort === 'mobile' && (
          <MenuButton onClick={toggleNav}>
            <MenuOutlined />
          </MenuButton>
        )}
        <Logo />
        {width > breakPoint.tablet && <Navigation />}
        {width < breakPoint.tablet && (
          <MobileNavigation activeNav={activeNav} toggleNav={toggleNav} />
        )}
        <FuncMenu />
      </Inner>
    </Container>
  );
};

export default Header;
