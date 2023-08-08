import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowLeft } from '@assets/ArrowLeft.svg';

interface Props {
  onClick: Function;
}

export default function PrevButton({ onClick }: Props) {
  return (
    <PrevButtonWrapper>
      {/* TODO: icon 적용 */}
      <Button type='button' onClick={() => onClick()}>
        <ArrowLeft />
        <span>이전</span>
      </Button>
    </PrevButtonWrapper>
  );
}

const PrevButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 600;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  span {
    margin-right: 2px;
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray};
  }
`;
