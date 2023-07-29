import React from 'react';
import styled from 'styled-components';

type btnStyleObject = {
  btnBackGroudColor?: string;
  btnTextColor?: string;
};

interface Props {
  text?: string;
  onClick?: Function;
  btnStyle?: btnStyleObject;
}

export default function DefaultButton({ text = 'Default Button', onClick, btnStyle }: Props) {
  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Button
      type='button'
      btnStyle={btnStyle}
      onClick={() => {
        handleOnClick();
      }}
    >
      {text}
    </Button>
  );
}

// FIXME: 안쓰이는 거 지우기, console error 확인
const Button = styled.button<{ btnStyle?: btnStyleObject }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 333px;
  height: 60px;
  border: ${({ theme, btnStyle }) => (btnStyle?.btnBackGroudColor === 'white' ? '1px solid #EFEFEF' : 'none')};
  border-radius: 8px;
  background-color: ${({ theme, btnStyle }) =>
    btnStyle?.btnBackGroudColor ? theme.colors[btnStyle?.btnBackGroudColor] : theme.colors.primary};
  color: ${({ theme, btnStyle }) =>
    btnStyle?.btnTextColor ? theme.colors[btnStyle?.btnTextColor] : theme.colors.white};
  font-size: 18px;
  font-weight: 600;
  box-shadow: ${({ theme }) => theme.shadow.default};
`;
