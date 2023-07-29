import Graph from '@components/atoms/Graph';
import WorstSea from '@components/atoms/WorstSea';
import React from 'react';
import styled from 'styled-components';

interface Props {
  totalPerson?: number;
  percent?: number;
  handleWorstSea: Function;
}

export default function SummaryBox({ totalPerson = 100, percent = 63, handleWorstSea }: Props) {
  return (
    <SummaryBoxWrapper>
      <Graph
        percentageGraph={75 * (percent / 100)}
        size={80}
        strokeWidth={20}
        color='#34C5EF'
        percent={percent}
        totalPerson={totalPerson}
        textColor='#353535'
        fontSize={16}
      />
      <WorstSea handleWorstSea={handleWorstSea} />
    </SummaryBoxWrapper>
  );
}

const SummaryBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 240px;
`;
