// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledHeader = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
`;

const Header = () => (
  <StyledHeader>
    <h1>Stack Overflow Clone</h1>
    <nav>
      <Link to="/">Home</Link> | <Link to="/ask">Ask Question</Link>
    </nav>
  </StyledHeader>
);

export default Header;