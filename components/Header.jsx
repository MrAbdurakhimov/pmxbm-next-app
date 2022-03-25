import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import theme from '../config/theme';
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 42px 10%;
`;
const Logo = styled.div`
  flex: 3;
`;
const Menu = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Item = styled.div``;

const Header = () => {
  return (
    <Container>
      <Logo>Logo</Logo>
      <Menu>
        <Item>
          <Link href={'/'}>
            <a>Additional Service</a>
          </Link>
        </Item>
        <Item>
          <Link href={'/'}>
            <a>Teacher Recource</a>
          </Link>
        </Item>
        <Item>
          <Link href={'/'}>
            <a>Events</a>
          </Link>
        </Item>
        <Item>
          <Link href={'/'}>
            <a>Awards Nomination</a>
          </Link>
        </Item>
        <Item>
          <Link href={'/'}>
            <a>Contact us</a>
          </Link>
        </Item>
      </Menu>
    </Container>
  );
};

export default Header;
