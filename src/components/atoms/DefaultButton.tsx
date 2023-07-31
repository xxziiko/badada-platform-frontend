import React from 'react';
import styled from 'styled-components';

interface Props {
  text?: string;
  onClick?: Function;
  style?: React.CSSProperties;
}

export default function DefaultButton({ text = 'Default Button', onClick, style }: Props) {
  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Button
      type='button'
      style={style}
      onClick={() => {
        handleOnClick();
      }}
    >
      {text}
    </Button>
  );
}

// FIXME: 안쓰이는 거 지우기, console error 확인
// Assign - 민지, 리팩토링 진행 예정
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  border: ${({ style }) => (style?.border ? style.border : 'none')};
  border-radius: 8px;
  background-color: ${({ theme, style }) => (style?.backgroundColor ? style.backgroundColor : theme.colors.primary)};
  color: ${({ theme, style }) => (style?.color ? style.color : theme.colors.white)};
  font-size: 18px;
  font-weight: 600;
  box-shadow: ${({ theme }) => theme.shadow.default};
`;
