import React from 'react';
import styled from 'styled-components';

interface Props {
  onClick: Function;
}

export default function PrevButton({ onClick }: Props) {
  return (
    <PrevButtonWrapper>
      {/* TODO: icon 적용 */}
      <button type='button' onClick={() => onClick()}>
        <span>&lt;</span>
        <span>이전</span>
      </button>
    </PrevButtonWrapper>
  );
}

const PrevButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 600;

  span:first-child {
    margin-right: 2px;
  }
`;
