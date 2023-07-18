import React from 'react';
import styled from 'styled-components';

interface Props {
  text?: string;
}

export default function LargeButton({ text = 'Large Button' }: Props) {
  return (
    <Button type='button'>
      <ButtonContent>{text}</ButtonContent>
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
  width: 300px;
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
