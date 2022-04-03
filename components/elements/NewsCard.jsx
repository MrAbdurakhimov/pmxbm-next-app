import React from 'react';
import styled from 'styled-components';
import { Button } from '../elements';
import theme from '../../config/theme';
import Link from 'next/link';
import { tablet } from '../utils/responsive';
import Image from 'next/image';

const Container = styled.div`
  transition: 0.2s all ease-in-out;
  color: ${theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  text-align: left;
  flex-direction: column;
  border-radius: 5px;
  margin: 32px;
  width: 320px;
  & a {
    width: 320px;
    color: ${theme.colors.primary};
  }
  ${tablet({
    width: '100%',
  })}
  &:hover {
    transition: 0.2s all ease-in-out;
    cursor: pointer;
  }
`;

const Heading = styled.div`
  font-size: 20px;
  font-weight: 400;
  width: 320px;
  margin-bottom: 20px;
`;

const NewsCard = ({ title, image = '1.png' }) => {
  return (
    <Container>
      <Image alt={'news'} src={'/news/' + image} width={320} height={180} />
      <Heading>{title}</Heading>
      <Link href="/">
        <a>Read more</a>
      </Link>
    </Container>
  );
};

export default NewsCard;
