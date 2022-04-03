import React from 'react';
import styled from 'styled-components';
import { Button } from '../elements';
import theme from '../../config/theme';
import Link from 'next/link';
import { tablet } from '../utils/responsive';
import Image from 'next/image';

const Container = styled.div`
  transition: 0.2s all ease-in-out;
  padding: 82px 24px 24px 24px;
  background: linear-gradient(
      0deg,
      rgba(0, 59, 131, 0.8),
      rgba(0, 59, 131, 0.8)
    ),
    ${(props) =>
      props.background
        ? `url('/card/${props.background}')`
        : `url('/card/${'1.png'}')`};
  background-size: cover;
  background-position: center;
  color: ${theme.colors.white};
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  flex-direction: column;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 32px 32px 64px 32px;
  width: 25%;
  ${tablet({
    width: '100%',
  })}
  &:hover {
    transition: 0.5s all ease-in-out;
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.1);
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
    cursor: pointer;
  }
  position: relative;
`;

const Heading = styled.div`
  font-size: 24px;
  font-weight: 600;
  width: 100%;
  margin-bottom: 24px;
`;
const Description = styled.div`
  font-weight: 400;
  margin-bottom: 42px;
  width: 100%;
`;

const Circle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: ${theme.colors.primary};
  position: absolute;
  top: -60px;
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = ({
  title,
  description,
  buttonUrl,
  buttonText,
  icon = 'mission.png',
  background = '1.png',
}) => {
  return (
    <Container background={background}>
      <Circle>
        <Image alt={'Card'} src={'/icons/' + icon} width={54} height={54} />
      </Circle>
      <Heading>{title}</Heading>
      <Description>{description}</Description>
      <Link href={buttonUrl || '/'}>
        <a>
          <Button background={theme.colors.secondary}>{buttonText}</Button>
        </a>
      </Link>
    </Container>
  );
};

export default Card;
