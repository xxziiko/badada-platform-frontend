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
import { resultStore } from '@shared/store';

import { colors } from '@styles/theme';
import { callGetSeaApi } from '@api/apis';

// FIXME: key error 확인
// TODO: DefaultTemplate, Defaultbutton 적용 관련 확인 부탁함다

type seaData = {
  beach: string;
  beach_attr: [];
  beach_rec: [];
  beach_cat: [];
  user_cnt: { mbit_cnt: number; total_user_cnt: number };
  bad_beach: string[];
  mbti: string;
};

export default function Result() {
  const [openTotalSeaModal, setOpenTotalSeaModal] = useState(false);
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const [isImgCapture, setIsImgCapture] = useState(false);
  const [isLinkCopy, setIsLinkCopy] = useState(false);
  const [isScrolledHalf, setIsScrolledHalf] = useState(false);
  const [seaData, setSeaData] = useState<seaData>({
    beach: '',
    beach_attr: [],
    beach_rec: [],
    beach_cat: [],
    user_cnt: { mbit_cnt: 0, total_user_cnt: 0 },
    bad_beach: ['', ''],
    mbti: '',
  });
  const { result } = resultStore();
  const navigate = useNavigate();

  const modalRef = useRef<HTMLDivElement>(null);

  const handleWorstSea = () => {
    callGetSeaApi(seaData?.bad_beach[1])
      .then((response: any) => {
        const { data } = response;
        setSeaData(data);
      })
      .catch((error: any) => {
        console.error('An error occurred:', error);
      });
  };

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

  useEffect(() => {
    if (result) {
      console.log(result);
      setSeaData((prevSeaData) => ({ ...prevSeaData, ...result }));
    }
  }, []);

  return (
    <PageLayout includeLogo={false} customStyles={false}>
      <ResultPage $resultSeaImg={`https://d27aaiwdisjvn.cloudfront.net/${seaData?.mbti}`}>
        <div className='result-sea-img' />
        <div className='result-card-wrapper'>
          <ResultCard
            seaContent={{
              seaName: seaData?.beach,
              seaContent: seaData?.beach_attr,
            }}
            tagText={seaData?.beach_cat}
            recommendationReason={seaData?.beach_rec}
            handleWorstSea={handleWorstSea}
            handleImgCopy={handleImgCopy}
            handleLinkCopy={handleLinkCopy}
            handleMoveToAllSea={handleMoveToAllSea}
            score={{ total: seaData?.user_cnt?.total_user_cnt, score: seaData?.user_cnt?.mbit_cnt, scoreIndex: 1 }}
            worstSea={{ worstSeaText: seaData?.bad_beach[0], worstSeaMbti: seaData?.bad_beach[1] }}
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
