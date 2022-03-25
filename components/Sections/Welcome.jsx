import React from 'react';
import styled from 'styled-components';
import theme from '../../config/theme';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primary + '96'};
  height: 74vh;
  color: ${theme.colors.white};
  text-align: center;
`;

const Welcome = () => {
  return (
    <Container>
      <h1>
        WELCOME TO THE CENTER FOR <br />
        PEDAGOGICAL EXCELLENCE AND <br />
        INTERNATIONAL ASSESSMENT
      </h1>
      Buttonn
    </Container>
  );
};

export default Welcome;
