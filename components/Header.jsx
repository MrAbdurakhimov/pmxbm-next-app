import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../config/theme';
import { RoundedButton } from './elements/';
import { Menu, X } from 'react-feather';
import { tablet, mobile } from './utils/responsive';
import Image from 'next/image';
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 42px 10%;
  position: relative;
  width: 100%;
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
  position: absolute;
  width: 100%;
  transition: all 1s;
  background-color: ${theme.colors.white};
  color: ${theme.colors.text};
  padding: 8% 42px;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 64vh;
  font-size: 20px;
  font-weight: bold;
  @media (max-width: ${1000}px) {
    transition: all 1s ease-in-out;
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  }
`;

const Item = styled.div``;

const Header = ({ icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Container>
        <Logo>
          <Image src={'/logo.svg'} width="156" height="48" alt={'Logo'} />
        </Logo>
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
            {isOpen ? (
              <X color={theme.colors.white} />
            ) : icon ? (
              icon
            ) : (
              <Menu color={theme.colors.white} />
            )}
          </RoundedButton>
        </ToggleButton>
      </Container>
      <MobileMenu isOpen={isOpen}>
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
    </>
  );
};

export default Header;
