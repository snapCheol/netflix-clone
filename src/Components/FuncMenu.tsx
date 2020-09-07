import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import SearchInput from './SearchInput';

const Container = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    color: #fff;
  }
  .FunctionalMenu {
    display: flex;
  }
`;

const FuncMenu = () => {
  // 검색창 활성화 상태
  const [activeSearch, setActiveSearch] = useState(false);
  const onSearchBox = useCallback(() => {
    setActiveSearch(true);
  }, []);

  return (
    <Container aria-labelledby="funcMenu">
      <h3 id="funcMenu" className="a11yHidden">
        기능 메뉴
      </h3>
      <div className="FunctionalMenu">
        {activeSearch && (
          <SearchInput
            activeSearch={activeSearch}
            setActiveSearch={setActiveSearch}
          />
        )}
        <Button onClick={onSearchBox}>
          <span className="a11yHidden">검색</span>
          <SearchOutlined />
        </Button>
      </div>
    </Container>
  );
};

export default FuncMenu;
