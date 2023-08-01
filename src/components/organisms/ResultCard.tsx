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
  handleLinkCopy: Function;
}

export default function ResultCard({
  seaContent,
  recommendationReason,
  tagText,
  totalPerson,
  percent,
  handleWorstSea,
  handleImgCopy,
  handleLinkCopy,
}: Props) {
  return (
    <ResultCardWrapper>
      <div className='sea-content-wrapper'>
        <span className='your-sea'>당신의 바다는</span>
        <span className='sea-name'>{seaContent?.seaName}</span>
        <div className='tag-wrapper'>
          {tagText?.map((tagData, tagIndex) => {
            return <Tag text={tagData} tagIndex={tagIndex} />;
          })}
        </div>
        <div className='sea-content-list-wrapper'>
          {seaContent?.seaContent?.map((seaContentData, seaContentIndex) => {
            return (
              <div className='sea-content-list-item'>
                <div className='blue-circle-wrapper'>
                  <BlueCircle />
                </div>
                <div className='sea-content-item-wrapper'>{seaContentData}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='recommend-wrapper'>
        <span className='recommend-title'>당신에게 추천하는 이유</span>
        <div className='recommend-list-wrapper'>
          {recommendationReason?.map((recommendData, recommendIndex) => {
            return (
              <div className='sea-content-list-item'>
                <div className='blue-circle-wrapper'>
                  <BlueCircle />
                </div>
                <div className='sea-content-item-wrapper'>{recommendData}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='summary-box-wrapper'>
        <SummaryBox totalPerson={totalPerson} percent={percent} handleWorstSea={handleWorstSea} />
      </div>
      <div className='link-box-wrapper'>
        <LinkBox handleImgCopy={handleImgCopy} handleLinkCopy={handleLinkCopy} />
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
  .sea-content-wrapper {
    display: flex;
    flex-direction: column;
    margin: 20px 20px 40px 20px;
    .your-sea {
      color: ${({ theme }) => theme.colors.secondary};
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    .sea-name {
      color: ${({ theme }) => theme.colors.darkMatter};
      text-align: center;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    .tag-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
    }
    .sea-content-list-wrapper {
      margin-top: 20px;
      .sea-content-list-item {
        display: flex;
        justify-content: space-between;
        width: 293px;
        margin-bottom: 10px;
        .sea-content-item-wrapper {
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
  .recommend-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 20px 40px 20px;
    .recommend-title {
      color: ${({ theme }) => theme.colors.darkMatter};
      text-align: center;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    .recommend-list-wrapper {
      margin-top: 20px;
      .sea-content-list-item {
        display: flex;
        justify-content: space-between;
        width: 293px;
        margin-bottom: 10px;
        .blueCircleWrapper {
        }
        .sea-content-item-wrapper {
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
  .summary-box-wrapper {
    display: flex;
    justify-content: center;
    margin: 0 20px 40px 20px;
  }
  .link-box-wrapper {
    display: flex;
    justify-content: center;
    margin: 0 20px 40px 20px;
  }
`;
