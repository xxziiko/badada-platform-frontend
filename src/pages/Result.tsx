import React from 'react';
import ResultCard from '@components/organisms/ResultCard';
import { styled } from 'styled-components';
import DefaultButton from '@components/atoms/DefaultButton';
import Banner from '@components/organisms/Banner';
import Logo from '@components/atoms/Logo';

// TODO: 영서가 담당하면 좋을듯

export default function Result() {
  return (
    <ResultPage>
      <div className='resultSeaImg' />
      <div className='resultCardWrapper'>
        <ResultCard
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
        />
      </div>
      <div className='reStartBtn'>
        <DefaultButton text='바다 찾기 다시하기' />
      </div>
      <div className='bannerWrapper'>
        <Banner />
      </div>
      <div className='logoWrapper'>
        <Logo />
      </div>
    </ResultPage>
  );
}

const ResultPage = styled.div`
  // TODO: alignCenter 변수화? - scss mixin
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ theme }) => theme.templateSize.width};
  height: ${({ theme }) => theme.templateSize.height};

  .resultSeaImg {
    position: absolute;
    width: 100%;
    height: 308px;
    // TODO: background image도 api 통해 받아오게 됨
    background:
      url('/img/resultSeaImg.png'),
      lightgray 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .resultCardWrapper {
    margin-top: 160px;
    z-index: 2;
  }
  .reStartBtn {
    margin: 40px 0 40px 0;
  }
  .bannerWrapper {
    margin-bottom: 80px;
  }
  .logoWrapper {
    margin-bottom: 40px;
  }
`;
