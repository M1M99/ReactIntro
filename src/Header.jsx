import React from 'react';
import styled from 'styled-components';

const Tagh1 = styled.h1`
  font-size: 36px;
  font-weight: 600;
  color: #FFFFFF;
  margin-left: 20px; 
  margin-right: 70%;
`;

const Nav1 = styled.nav`
  width: 100%;
  height: 76px;
  background: #CCCCCC;
  display: flex;       
  justify-content: flex-start;
  align-items: center;
`;

const List1 = styled.li`
    list-style-type: none;
`
const btn = styled.button`
    background-color: #CCCCCC;
`
function Header11() {
  return (
    <header>
      <Nav1>
        <Tagh1>Интерьер.</Tagh1>
        <ul>
          <List1>
            <btn style={{ marginRight: '20px' }}>Корзина</btn>
            <btn>Каталог</btn>
          </List1>
        </ul>
      </Nav1>
    </header>
  );
}

export default Header11;
