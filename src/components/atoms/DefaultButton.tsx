import React from 'react';
import styled from 'styled-components';

interface Props {
  text?: string;
  onClick?: Function;
}

export default function DefaultButton({ text = 'Default Button', onClick }: Props) {
  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Button
      type='button'
      onClick={() => {
        handleOnClick();
      }}
    >
      {text}
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 290px;
  height: 60px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  font-weight: 600;
  box-shadow: ${({ theme }) => theme.shadow.default};
`;
