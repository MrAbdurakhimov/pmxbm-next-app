import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../config/theme';
import { RoundedButton } from './elements/';
import { Menu } from 'react-feather';
import { tablet, mobile } from './utils/responsive';
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
  ${tablet({
    display: 'none',
  })}
`;

const ToggleButton = styled.div`
  display: none;
  ${tablet({
    display: 'block',
  })}
`;

const MobileMenu = styled.div`
  transition: all 0.3s ease-in-out;
  background-color: ${theme.colors.primary + '96'};
  color: ${theme.colors.white};
  padding: 8% 42px;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 64vh;
  font-size: 20px;
  font-weight: bold;
  ${tablet({
    display: 'flex',
  })}
`;

const Item = styled.div``;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
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
        </MainMenu>
        <ToggleButton
          onClick={() => {
            setIsOpen(!isOpen);
            console.log(isOpen);
          }}
        >
          <RoundedButton background={theme.colors.white}>
            <Menu color={theme.colors.white} />
          </RoundedButton>
        </ToggleButton>
      </Container>
      {isOpen && (
        <MobileMenu>
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
        </MobileMenu>
      )}
    </>
  );
};

export default Header;
