import React from 'react';
import Tag from '@components/atoms/Tag';
import { ReactComponent as BlueCircle } from '@assets/BlueCircle.svg';
import styled from 'styled-components';
import SummaryBox from './SummaryBox';
import LinkBox from '@components/atoms/LinkBox';

type seaObject = {
  seaName?: string;
  seaContent?: string[];
};

interface Props {
  seaContent?: seaObject;
  recommendationReason?: string[];
  tagText?: string[];
  totalPerson?: number;
  percent?: number;
  handleWorstSea: Function;
  handleImgCopy: Function;
}

export default function ResultCard({
  seaContent,
  recommendationReason,
  tagText,
  totalPerson,
  percent,
  handleWorstSea,
  handleImgCopy,
}: Props) {
  return (
    <ResultCardWrapper>
      <div className='seaContentWrapper'>
        <span className='yourSea'>당신의 바다는</span>
        <span className='seaName'>{seaContent?.seaName}</span>
        <div className='tagWrapper'>
          {tagText?.map((tagData, tagIndex) => {
            return <Tag text={tagData} tagIndex={tagIndex} />;
          })}
        </div>
        <div className='seaContentListWrapper'>
          {seaContent?.seaContent?.map((seaContentData, seaContentIndex) => {
            return (
              <div className='seaContentListItem'>
                <div className='blueCircleWrapper'>
                  <BlueCircle />
                </div>
                <div className='seaContentItemWrapper'>{seaContentData}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='recommendWrapper'>
        <span className='recommendTitle'>당신에게 추천하는 이유</span>
        <div className='recommendListWrapper'>
          {recommendationReason?.map((recommendData, recommendIndex) => {
            return (
              <div className='seaContentListItem'>
                <div className='blueCircleWrapper'>
                  <BlueCircle />
                </div>
                <div className='seaContentItemWrapper'>{recommendData}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='summaryBoxWrapper'>
        <SummaryBox totalPerson={totalPerson} percent={percent} handleWorstSea={handleWorstSea} />
      </div>
      <div className='linkBoxWrapper'>
        <LinkBox handleImgCopy={handleImgCopy} />
      </div>
    </ResultCardWrapper>
  );
}

const ResultCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 333px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 4px 2px rgba(145, 205, 248, 0.2);
  .seaContentWrapper {
    display: flex;
    flex-direction: column;
    margin: 20px 20px 40px 20px;
    .yourSea {
      color: ${({ theme }) => theme.colors.secondary};
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    .seaName {
      color: ${({ theme }) => theme.colors.darkMatter};
      text-align: center;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    .tagWrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
    }
    .seaContentListWrapper {
      margin-top: 20px;
      .seaContentListItem {
        display: flex;
        justify-content: space-between;
        width: 293px;
        margin-bottom: 10px;
        .blueCircleWrapper {
        }
        .seaContentItemWrapper {
          width: 281px;
          color: ${({ theme }) => theme.colors.darkgray};
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px; /* 142.857% */
        }
      }
    }
  }
  .recommendWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 20px 40px 20px;
    .recommendTitle {
      color: ${({ theme }) => theme.colors.darkMatter};
      text-align: center;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    .recommendListWrapper {
      margin-top: 20px;
      .seaContentListItem {
        display: flex;
        justify-content: space-between;
        width: 293px;
        margin-bottom: 10px;
        .blueCircleWrapper {
        }
        .seaContentItemWrapper {
          width: 281px;
          color: ${({ theme }) => theme.colors.darkgray};
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px; /* 142.857% */
        }
      }
    }
  }
  .summaryBoxWrapper {
    display: flex;
    justify-content: center;
    margin: 0 20px 40px 20px;
  }
  .linkBoxWrapper {
    display: flex;
    justify-content: center;
    margin: 0 20px 40px 20px;
  }
`;
