import React from 'react';
import styled from 'styled-components';

interface Props {
  text?: string | React.ReactElement;
  onClick: Function;
}

export default function LargeButton({ text = 'Large Button', onClick }: Props) {
  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Button type='button' onClick={() => handleOnClick()}>
      <ButtonContent>{text}</ButtonContent>
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
  width: 100%;
  height: 100px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  font-weight: 600;
  box-shadow: ${({ theme }) => theme.shadow.default};
`;

const ButtonContent = styled.span`
  width: 100%;
  word-wrap: break-word;
`;
