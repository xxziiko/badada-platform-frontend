import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import domtoimage from 'dom-to-image';

import ResultCard from '@components/organisms/ResultCard';
import DefaultButton from '@components/atoms/DefaultButton';
import Banner from '@components/organisms/Banner';
import Logo from '@components/atoms/Logo';
import Toast from '@components/atoms/ Toast';
import PageLayout from '@components/layouts/PageLayout';
import TotalSeaModal from '@components/template/TotalSeaModal';
import ReviewModal from '@components/template/ReviewModal';

import { colors } from '@styles/theme';

// FIXME: key error 확인
// TODO: DefaultTemplate, Defaultbutton 적용 관련 확인 부탁함다

export default function Result() {
  const [openTotalSeaModal, setOpenTotalSeaModal] = useState(false);
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const [isImgCapture, setIsImgCapture] = useState(false);
  const [isLinkCopy, setIsLinkCopy] = useState(false);
  const [isScrolledHalf, setIsScrolledHalf] = useState(false);
  const navigate = useNavigate();

  const modalRef = useRef<HTMLDivElement>(null);

  const handleWorstSea = () => {};

  const handleMoveToAllSea = () => {
    setOpenTotalSeaModal(!openTotalSeaModal);
  };

  const handleReStart = () => {
    navigate('/');
  };
  const handleImgCopy = () => {
    const element = document.getElementById('page-to-save'); // 캡처할 요소의 ID로 대체하세요.
    if (element) {
      domtoimage.toPng(element).then((dataUrl) => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'result-sea.png'; // 원하는 파일명으로 대체하세요.
        link.click();
        setIsImgCapture(true);
      });
    }
    setTimeout(() => {
      setIsImgCapture(false);
    }, 4000);
  };

  const copyToClipboard = (text: string) => {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);

    // Select and copy the text
    textarea.select();
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(textarea);
  };

  const handleLinkCopy = () => {
    // 현재 페이지의 URL 가져오기
    const currentUrl = window.location.href;

    // 클립보드에 URL 복사하기
    copyToClipboard(currentUrl);
    setIsLinkCopy(true);
    setTimeout(() => {
      setIsLinkCopy(false);
    }, 2000);
  };

  const handleReviewModal = () => {
    setOpenReviewModal(!openReviewModal);
  };

  const handleScroll = () => {
    const position = window.scrollY;

    // 화면 전체의 3/1 지점
    const halfHeight = window.innerHeight / 3;

    // 스크롤이 화면 전체 높이의 절반을 넘어서면 isScrolledHalf 값을 true로 변경합니다.
    if (position > halfHeight && !isScrolledHalf) {
      setOpenReviewModal(true);
      setIsScrolledHalf(true);
    }
  };

  useEffect(() => {
    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트 언마운트 시 이벤트 리스너 해제
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolledHalf]);

  return (
    <PageLayout includeLogo={false} customStyles={false}>
      <ResultPage $resultSeaImg='/img/resultSeaImg.png'>
        <div className='result-sea-img' />
        <div className='result-card-wrapper' id='page-to-save'>
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
            handleLinkCopy={handleLinkCopy}
            handleMoveToAllSea={handleMoveToAllSea}
            score={{ total: 100, score: 26, scoreIndex: 1 }}
          />
        </div>
        <div className='re-start-btn'>
          <DefaultButton text='바다 찾기 다시하기' onClick={handleReStart} />
        </div>
        <div className='banner-wrapper'>
          <Banner />
        </div>
        <div className='logo-wrapper'>
          <Logo />
        </div>
        {isImgCapture && (
          <div className='img-capture'>
            <Toast text='이미지가 캡쳐되었습니다' />
          </div>
        )}
        {isLinkCopy && (
          <div className='link-copy'>
            <Toast text='링크가 복사되었습니다' />
          </div>
        )}
      </ResultPage>
      {openTotalSeaModal && (
        <div ref={modalRef}>
          <TotalSeaModal onClose={handleMoveToAllSea} />
        </div>
      )}
      {openReviewModal && <ReviewModal onClose={handleReviewModal} />}
    </PageLayout>
  );
}

const ResultPage = styled.div<{ $resultSeaImg?: string }>`
  // TODO: alignCenter 변수화? - scss mixin
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ theme }) => theme.pageStyles.width};
  height: ${({ theme }) => theme.pageStyles.height};
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 100vw;
  }
  .result-sea-img {
    position: absolute;
    width: 100%;
    height: 308px;
    background-color: black;
    // TODO: background image도 api 통해 받아오게 됨

    background: ${({ $resultSeaImg }) => ($resultSeaImg ? `url(${$resultSeaImg}), lightgray 50%` : 'lightgray 50%')};
    background-size: cover;
    background-repeat: no-repeat;
  }
  .result-card-wrapper {
    margin-top: 160px;
    z-index: 10;
  }
  .all-sea-btn {
    width: 100%;
    padding: 0 30px;
    margin: 40px 0 0 0;
  }
  .re-start-btn {
    width: 100%;
    padding: 0 30px;
    margin: 20px 0 40px 0;
  }
  .banner-wrapper {
    width: 100%;
    margin-bottom: 80px;
  }
  .logo-wrapper {
    margin-bottom: 40px;
  }
  .img-capture {
    position: fixed;
    bottom: 40px;
    z-index: 20;
  }
  .link-copy {
    position: fixed;
    bottom: 40px;
    z-index: 20;
  }
`;
