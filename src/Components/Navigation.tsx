import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  & > ul {
    display: flex;
    > li {
      margin: 0 10px;
      > a {
        color: #e5e5e5;
        font-size: 14px;
      }
    }
  }
`;

const Navigation = () => {
  return (
    <Nav>
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

export default Navigation;
