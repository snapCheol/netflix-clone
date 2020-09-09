import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type MobileNavigationType = {
  activeNav: boolean;
};

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

const MobileNavigation = ({ activeNav }: MobileNavigationType) => {
  return (
    <Nav activeNav={activeNav}>
      <h3 className="a11yHidden">메인 네비게이션</h3>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/tv">TV프로그램</Link>
        </li>
        <li>
          <Link to="/movie">영화</Link>
        </li>
      </ul>
    </Nav>
  );
};

export default MobileNavigation;
