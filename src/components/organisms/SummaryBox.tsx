import Graph from '@components/atoms/Graph';
import WorstSea from '@components/atoms/WorstSea';
import React from 'react';
import styled from 'styled-components';

export default function SummaryBox() {
  return (
    <SummaryBoxWrapper>
      <Graph
        percentage={75 * (80 / 100)}
        size={80}
        strokeWidth={20}
        color='#34C5EF'
        text='63%'
        textColor='#353535'
        fontSize={16}
      />
      <WorstSea />
    </SummaryBoxWrapper>
  );
}

const SummaryBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 240px;
`;
