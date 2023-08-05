import Graph from '@components/atoms/Graph';
import MedalScore from '@components/atoms/MedalScore';
import WorstSea from '@components/atoms/WorstSea';
import React from 'react';
import styled from 'styled-components';

type scoreObject = {
  total: number;
  score: number;
  scoreIndex: number;
};

interface Props {
  totalPerson?: number;
  percent?: number;
  handleWorstSea: Function;
  handleMoveToAllSea: Function;
  score: scoreObject;
}

export default function SummaryBox({
  totalPerson = 100,
  percent = 63,
  handleWorstSea,
  handleMoveToAllSea,
  score,
}: Props) {
  return (
    <SummaryBoxWrapper>
      <MedalScore score={score} handleMoveToAllSea={handleMoveToAllSea} />
      <WorstSea handleWorstSea={handleWorstSea} />
    </SummaryBoxWrapper>
  );
}

const SummaryBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 240px;
`;
