import React from 'react';
import styled from 'styled-components';
import theme from '../../config/theme';

import { Card } from '../elements/';

const Container = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  padding: 64px 10%;
  background-color: ${theme.colors.white};
  color: ${theme.colors.text};
  height: 74vh;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  padding: 24px 0;
`;

const Welcome = () => {
  return (
    <Container>
      <h1 style={{ textTransform: 'uppercase' }}>What We Do</h1>
      <Cards>
        <Card
          title="Mission Statement"
          description={'Clicks to formal description of CPE'}
          buttonText="Our mission"
        />
        <Card
          title="Mission Statement"
          description={'Clicks to formal description of CPE'}
          buttonText="Our mission"
        />
        <Card
          title="Mission Statement"
          description={'Clicks to formal description of CPE'}
          buttonText="Our mission"
        />
        <Card
          title="Mission Statement"
          description={'Clicks to formal description of CPE'}
          buttonText="Our mission"
        />
        <Card
          title="Mission Statement"
          description={'Clicks to formal description of CPE'}
          buttonText="Our mission"
        />
        <Card
          title="Mission Statement"
          description={'Clicks to formal description of CPE'}
          buttonText="Our mission"
        />
      </Cards>
    </Container>
  );
};

export default Welcome;
