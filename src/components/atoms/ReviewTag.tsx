import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface Props {
  text?: string;
  onClick?: Function;
}

export default function ReviewTag({ text = '결과가 마음에 들어요', onClick }: Props) {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleOnClick = () => {
    setIsClicked(!isClicked);
    if (onClick) onClick();
  };

  return (
    <TagButton
      type='button'
      onClick={() => {
        handleOnClick();
      }}
      $clicked={isClicked.toString()}
    >
      {text}
    </TagButton>
  );
}

const TagButton = styled.button<{ $clicked: string }>`
  padding: 8px 10px;
  border: 1px solid #d9d9d9;
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.darkgray};
  background-color: ${({ $clicked, theme }) => ($clicked === 'true' ? '#E4E4E4' : theme.colors.white)};
  font-weight: 500;
  cursor: pointer;
`;
