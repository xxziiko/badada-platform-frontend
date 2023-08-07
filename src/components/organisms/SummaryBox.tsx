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
  handleWorstSea: Function;
  handleMoveToAllSea: Function;
  score: scoreObject;
  worstSea: { worstSeaText: string; worstSeaEng: string };
}

export default function SummaryBox({ handleWorstSea, handleMoveToAllSea, score, worstSea }: Props) {
  return (
    <SummaryBoxWrapper>
      <MedalScore score={score} handleMoveToAllSea={handleMoveToAllSea} />
      <WorstSea
        handleWorstSea={() => {
          handleWorstSea(worstSea.worstSeaEng);
        }}
        worstSea={worstSea}
      />
    </SummaryBoxWrapper>
  );
}

const SummaryBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 240px;
  @media (max-width: 360px) {
    width: 100%;
  }
`;
