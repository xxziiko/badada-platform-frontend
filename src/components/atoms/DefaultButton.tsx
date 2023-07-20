import React from 'react';
import styled from 'styled-components';

interface Props {
  text?: string;
}

export default function DefaultButton({ text = 'Default Button' }: Props) {
  return <Button type='button'>{text}</Button>;
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
