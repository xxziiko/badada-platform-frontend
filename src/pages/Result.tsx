import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import ResultCard from '@components/organisms/ResultCard';
import DefaultButton from '@components/atoms/DefaultButton';
import Banner from '@components/organisms/Banner';
import Logo from '@components/atoms/Logo';
import html2canvas from 'html2canvas';
import DefaultTemplate from '@components/layouts/DefaultTemplate';

import { colors } from '@styles/theme';

// FIXME: key error 확인
// TODO: DefaultTemplate, Defaultbutton 적용 관련 확인 부탁함다

export default function Result() {
  const navigate = useNavigate();

  // 데이터를 worstSea로 변경
  const handleWorstSea = () => {};
  const handleMoveToAllSea = () => {};
  const handleReStart = () => {
    navigate('/');
  };
  const handleImgCopy = () => {
    const element = document.getElementById('page-to-save'); // 'page-to-save'를 캡처할 요소의 실제 ID로 대체하세요.
    if (element) {
      html2canvas(element).then((canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.download = 'sea-result.png'; // 원하는 파일명으로 'page-screenshot.png'를 대체하세요.
        link.click();
      });
    }
  };
  return (
    <DefaultTemplate includeLogo={false} customStyles={false}>
      <ResultPage resultSeaImg='/img/resultSeaImg.png'>
        <div className='resultSeaImg' />
        <div className='resultCardWrapper' id='page-to-save'>
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
            totalPerson={100}
            percent={63}
            handleWorstSea={handleWorstSea}
            handleImgCopy={handleImgCopy}
          />
        </div>
        <div className='allSeaBtn'>
          <DefaultButton
            text='바다 찾기 다시하기'
            style={{ backgroundColor: `${colors.white}`, color: `${colors.darkMatter}`, border: '1px solid #E4E4E4' }}
            onClick={handleReStart}
          />
        </div>
        <div className='reStartBtn'>
          <DefaultButton text='전체 바다 보러가기' onClick={handleMoveToAllSea} />
        </div>
        <div className='bannerWrapper'>
          <Banner />
        </div>
        <div className='logoWrapper'>
          <Logo />
        </div>
      </ResultPage>
    </DefaultTemplate>
  );
}

const ResultPage = styled.div<{ resultSeaImg?: string }>`
  // TODO: alignCenter 변수화? - scss mixin
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ theme }) => theme.pageStyles.width};
  height: ${({ theme }) => theme.pageStyles.height};

  .resultSeaImg {
    position: absolute;
    width: 100%;
    height: 308px;
    // TODO: background image도 api 통해 받아오게 됨
    background: ${({ resultSeaImg }) => (resultSeaImg ? `url(${resultSeaImg}), lightgray 50%` : 'lightgray 50%')};
    background-size: cover;
    background-repeat: no-repeat;
  }
  .resultCardWrapper {
    margin-top: 160px;
    z-index: 10;
  }
  .allSeaBtn {
    width: 333px;
    margin: 40px 0 0 0;
  }
  .reStartBtn {
    width: 333px;
    margin: 20px 0 40px 0;
  }
  .bannerWrapper {
    margin-bottom: 80px;
  }
  .logoWrapper {
    margin-bottom: 40px;
  }
`;
