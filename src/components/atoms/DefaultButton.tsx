import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  text?: string | React.ReactElement;
  onClick?: Function;
  style?: React.CSSProperties;
}

export default function DefaultButton({ text = 'Default Button', onClick, style }: Props) {
  const [isClicked, setIsClicked] = useState(false);

  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Button
      type='button'
      style={style}
      isClicked={isClicked}
      onClick={() => {
        handleOnClick();
      }}
      onMouseDown={() => setIsClicked(!isClicked)}
    >
      <ButtonContent>{text}</ButtonContent>
    </Button>
  );
}

const Button = styled.button<{ isClicked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 8px;
  background-color: ${({ isClicked, theme }) => (isClicked ? '#56A7E1' : theme.colors.primary)};
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  font-weight: 600;
  box-shadow: ${({ theme }) => theme.shadow.default};
`;

const ButtonContent = styled.span`
  width: 100%;
  word-wrap: break-word;
`;
