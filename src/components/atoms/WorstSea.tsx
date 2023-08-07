import React from 'react';
import styled from 'styled-components';

interface Props {
  worstSea: { worstSeaText: string; worstSeaEng: string };
  handleWorstSea: Function;
}

export default function WorstSea({ worstSea, handleWorstSea }: Props) {
  return (
    <WorstSeaWrapper
      onClick={() => {
        handleWorstSea();
      }}
    >
      <span className='WorstSeaTitle'>최악의 바다</span>
      <img
        src={`https://d27aaiwdisjvn.cloudfront.net/${worstSea.worstSeaEng}`}
        alt='worstSeaImg'
        className='worstSeaImg'
      />
      <span className='worstSeaName'>{worstSea.worstSeaText}</span>
      <button className='worstSeaBtn' type='button'>
        자세히 보기
      </button>
    </WorstSeaWrapper>
  );
}

const WorstSeaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  cursor: pointer;
  .WorstSeaTitle {
    color: ${({ theme }) => theme.colors.darkMatter};
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .worstSeaImg {
    width: 90px;
    height: 90px;
    border-radius: 50px;
    margin: 18px 0 16px 0;
  }
  .worstSeaName {
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .worstSeaBtn {
    width: 65px;
    height: 16px;
    margin-top: 4px;
    border-radius: 50px;
    background: #21608d;
    color: ${({ theme }) => theme.colors.white};
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
