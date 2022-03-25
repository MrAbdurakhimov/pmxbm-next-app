import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  &:hover {
    transition: 0.2s all ease-in-out;
    background-color: ${(props) => props.background + '40'};
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
