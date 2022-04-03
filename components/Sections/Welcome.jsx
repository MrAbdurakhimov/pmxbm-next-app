import React from 'react';
import styled from 'styled-components';
import theme from '../../config/theme';
import { Button } from '../elements';
import { tablet } from './../utils/responsive';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('/section/home-bg.png');
  background-size: cover;
  background-position: center;
  height: 74vh;
  color: ${theme.colors.white};
  text-align: center;
  flex-direction: column;
  h1 {
    ${tablet({
      fontSize: '1.5rem',
    })}
  }
`;

const Welcome = () => {
  return (
    <Container>
      <h1>
        WELCOME TO THE CENTER FOR <br />
        PEDAGOGICAL EXCELLENCE AND <br />
        INTERNATIONAL ASSESSMENT
      </h1>
      <Button background={theme.colors.secondary}>PDQ Login</Button>
    </Container>
  );
};

export default Welcome;
