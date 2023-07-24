import React from 'react';
import Tag from '@components/atoms/Tag';
import { ReactComponent as BlueCircle } from '@assets/BlueCircle.svg';
import styled from 'styled-components';
import SummaryBox from './SummaryBox';
import LinkBox from '@components/atoms/LinkBox';

{
  /* <ResultCard
  seaContent={{
    seaName: '고래불 해변',
    seaContent: [
      '제주도 동쪽에 위치하고 있는 마을인 ‘월정리’는 ‘달이 머문다’는 뜻의 이름을 가진 서정적인 풍경의 마을',
      '수심이 얕아 아이를 동반한 가족이 물놀이 하러 오기 좋음 제주도 올레길 20코스 ‘김녕-하도 올레’와 ‘김녕-월정 지질트레일 코스’의 일부여서 뚜벅이 여행객들이 들리기 좋음',
      '에메랄드 빛 바다와 하얀 모래사장이 인상적이고 풍경이 아름다움 주변에 아담한 카페 거리 조성, 소품샵 등 구경거리 많음',
    ],
  }}
  tagText={['조용한', '낭만적인', '명상']}
  recommendationReason={[
    '타인과의 깊은 연결과 자유로운 대화를 추구하는 특징을 가지고 있습니다. 월정리 해변은 사람들이 많이 찾는 장소로, 이러한 분위기에서 다양한 사람들과의 교류와 즐거운 대화를 즐길 수 있을 것입니다.',
    '창의적이고 상상력이 풍부한 특징을 가지고 있습니다. 월정리 해변은 독특한 지형과 잔잔한 파도를 가진 해안선을 가지고 있어, 이러한 환경에서 자신의 창의적인 아이디어를 발휘하고 새로운 경험을 만들어갈 수 있을 것입니다.',
    '새로운 경험과 자유로움을 추구하는 특징을 가지고 있습니다. 월정리 해변은 아름다운 풍경과 다양한 액티비티를 즐길 수 있는 장소로, 이러한 환경에서 자유로움과 자연과의 교감을 느끼며 자신의 에너지를 발산할 수 있을 것입니다.',
  ]}
/>; */
}

type seaObject = {
  seaName?: string;
  seaContent?: string[];
};

interface Props {
  seaContent?: seaObject;
  recommendationReason?: string[];
  tagText?: string[];
}

export default function ResultCard({ seaContent, recommendationReason, tagText }: Props) {
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
        <SummaryBox />
      </div>
      <div className='linkBoxWrapper'>
        <LinkBox />
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
