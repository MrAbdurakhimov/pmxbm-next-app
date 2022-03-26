import React from 'react';
import { ChevronDown } from 'react-feather';
import styled from 'styled-components';
import theme from '../config/theme';
import Header from './Header';

const Container = styled.div`
  display: block;
`;
const LowerSide = styled.div`
  background-color: ${theme.colors.white};
  min-height: 42vh;
`;

const Footer = () => {
  return (
    <Container>
      <Header icon={<ChevronDown color={theme.colors.white} />} />
      <LowerSide></LowerSide>
    </Container>
  );
};

export default Footer;
