import Link from 'next/link';
import React from 'react';
import { Menu } from 'react-feather';
import styled from 'styled-components';
import theme from '../config/theme';
import RoundedButton from './elements/RoundedButton';
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
  font-size: 30px;
  font-weight: bold;
`;
const MainMenu = styled.div`
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
      <MainMenu>
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
        <Item>
          <Link href={'/'}>
            <a>
              <RoundedButton background={theme.colors.white}>
                <Menu color={theme.colors.white} />
              </RoundedButton>
            </a>
          </Link>
        </Item>
      </MainMenu>
    </Container>
  );
};

export default Header;
