import React from 'react';
import styled from 'styled-components';
import theme from '../../config/theme';
import { NewsCard } from '../elements';

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

const News = () => {
  return (
    <Container>
      <h1 style={{ textTransform: 'uppercase' }}>News blog</h1>
      <br />
      <br />
      <Cards>
        <NewsCard
          image="1.png"
          title={
            '«Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut '
          }
        />
        <NewsCard
          image="2.png"
          title={
            '«Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut '
          }
        />
        <NewsCard
          image="3.png"
          title={
            '«Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut '
          }
        />
        <NewsCard
          image="4.png"
          title={
            '«Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut '
          }
        />
        <NewsCard
          image="5.png"
          title={
            '«Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut '
          }
        />
        <NewsCard
          image="6.png"
          title={
            '«Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut '
          }
        />
      </Cards>
    </Container>
  );
};

export default News;
