import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type MobileNavigationType = {
  activeNav: boolean;
  toggleNav?: () => void;
};

const Dimmed = styled.div<MobileNavigationType>`
  display: ${(props) => (!props.activeNav ? 'none' : 'block')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Nav = styled.nav<MobileNavigationType>`
  position: fixed;
  top: 50px;
  left: 0;
  bottom: 0;
  width: 60%;
  max-width: 300px;
  padding: 5%;
  background-color: rgba(0, 0, 0);
  transform: ${(props) =>
    !props.activeNav ? 'translateX(-300px)' : 'translateX(0)'};
  & ul li {
    margin: 10px 0;
    > a {
      display: block;
    }
  }
  transition: 0.3s all ease;
`;

const MobileNavigation = ({ activeNav, toggleNav }: MobileNavigationType) => {
  const mobileNavClick = useCallback(() => {
    toggleNav && toggleNav();
  }, [toggleNav]);
  return (
    <>
      <Dimmed activeNav={activeNav} onClick={toggleNav} />
      <Nav activeNav={activeNav}>
        <h3 className="a11yHidden">메인 네비게이션</h3>
        <ul>
          <li>
            <Link to="/" onClick={mobileNavClick}>
              홈
            </Link>
          </li>
          <li>
            <Link to="/tv" onClick={mobileNavClick}>
              TV프로그램
            </Link>
          </li>
          <li>
            <Link to="/movie" onClick={mobileNavClick}>
              영화
            </Link>
          </li>
        </ul>
      </Nav>
    </>
  );
};

export default MobileNavigation;
