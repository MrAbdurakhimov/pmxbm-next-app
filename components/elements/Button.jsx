import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: ${(props) => props.background};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 42px;
  border-radius: 5px;
  &:hover {
    transition: 0.2s all ease-in-out;
    background-color: ${(props) => props.background};
  }
  &:active {
    transition: 0.2s all ease-in-out;
    background-color: ${(props) => props.background + '80'};
  }
`;

const RoundedButton = ({ children, background }) => {
  return <Button background={background}>{children}</Button>;
};

export default RoundedButton;
