import React from 'react';
import styled from 'styled-components';
import { Button } from '../elements';
import theme from '../../config/theme';
import Link from 'next/link';
import { tablet } from '../utils/responsive';

const Container = styled.div`
  transition: 0.2s all ease-in-out;
  padding: 24px;
  background-color: #f5faff;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  flex-direction: column;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 32px;
  width: 25%;
  ${tablet({
    width: '100%',
  })}
  &:hover {
    transition: 0.2s all ease-in-out;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    cursor: pointer;
  }
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

const Card = ({ title, description, buttonUrl, buttonText }) => {
  return (
    <Container>
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
