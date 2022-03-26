import React from 'react';
import styled from 'styled-components';
import theme from '../../config/theme';
import { Button } from '../elements';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${theme.colors.primary + '96'};
  height: 74vh;
  color: ${theme.colors.white};
  text-align: center;
  flex-direction: column;
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
