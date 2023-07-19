import React from 'react';
import styled from 'styled-components';

export default function PrevButton() {
  return (
    <PrevButtonWrapper>
      {/* TODO: icon 적용 */}
      <span>&lt;</span>
      <span>이전</span>
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
