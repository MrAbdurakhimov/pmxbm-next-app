import React from 'react';
import styled from 'styled-components';
import theme from '../../config/theme';

import { Card } from '../elements/';

const Container = styled.div`
  display: block;
  text-align: center;
  padding: 64px 10%;
  background-color: ${theme.colors.white};
  color: ${theme.colors.text};
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  padding: 24px 0;
`;

const WhatWeDo = () => {
  return (
    <Container>
      <h1 style={{ textTransform: 'uppercase' }}>What We Do</h1>
      <br />
      <br />
      <Cards>
        <Card
          title="Mission Statement"
          description={'Clicks to formal description of CPE'}
          buttonText="Our mission"
          icon="mission.png"
          background="1.png"
        />
        <Card
          title="Mission Statement"
          description={'Clicks to formal description of CPE'}
          buttonText="Our mission"
          icon="education.png"
          background="2.png"
        />
        <Card
          title="Mission Statement"
          description={'Clicks to formal description of CPE'}
          buttonText="Our mission"
          icon="teacher.png"
          background="3.png"
        />
        <Card
          title="Mission Statement"
          description={'Clicks to formal description of CPE'}
          buttonText="Our mission"
          icon="reaserch.png"
          background="4.png"
        />
        <Card
          title="Mission Statement"
          description={'Clicks to formal description of CPE'}
          buttonText="Our mission"
          icon="hr.png"
          background="5.png"
        />
        <Card
          title="Mission Statement"
          description={'Clicks to formal description of CPE'}
          buttonText="Our mission"
          icon="movie.png"
          background="6.png"
        />
      </Cards>
    </Container>
  );
};

export default WhatWeDo;
