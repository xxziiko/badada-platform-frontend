import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import domtoimage from 'dom-to-image';
import ResultCard from '@components/organisms/ResultCard';
import DefaultButton from '@components/atoms/DefaultButton';
import Banner from '@components/organisms/Banner';
import Logo from '@components/atoms/Logo';
import Toast from '@components/atoms/ Toast';
import PageLayout from '@components/layouts/PageLayout';
import TotalSeaModal from '@components/template/TotalSeaModal';
import ReviewModal from '@components/template/ReviewModal';
import { callGetSeaApi } from '@api/apis';
import { analytics } from '@shared/analytics';

// FIXME: key error 확인
// TODO: DefaultTemplate, Defaultbutton 적용 관련 확인 부탁함다

// TODO: type 빼놓기
type seaData = {
  beach: string;
  beach_eng: string;
  beach_attr: [];
  beach_rec: [];
  beach_cat: [];
  user_cnt: { mbti_cnt: number; total_user_cnt: number };
  bad_beach: string[];
  mbti: string;
  rank: number;
};

export default function Result() {
  analytics.track('page_result');
  const [openTotalSeaModal, setOpenTotalSeaModal] = useState(false);
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const [isImgCapture, setIsImgCapture] = useState(false);
  const [isLinkCopy, setIsLinkCopy] = useState(false);
  const [isScrolledHalf, setIsScrolledHalf] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [seaData, setSeaData] = useState<seaData>({
    beach: '',
    beach_eng: '',
    beach_attr: [],
    beach_rec: [],
    beach_cat: [],
    user_cnt: { mbti_cnt: 0, total_user_cnt: 0 },

    bad_beach: ['', ''],
    mbti: '',
    rank: 0,
  });
  const { beachEng } = useParams();
  const navigate = useNavigate();

  const handleWorstSea = (worstSeaMbti: string) => {
    analytics.track('click_worst_sea');
    navigate(`/result/${worstSeaMbti}`);
  };

  const handleMoveToAllSea = () => {
    analytics.track('click_all_sea');
    setOpenTotalSeaModal(!openTotalSeaModal);
  };

  const handleReStart = () => {
    analytics.track('click_re_start_test');
    navigate('/');
  };

  const handleImgCopy = () => {
    analytics.track('click_image_copy');
    setIsLoading(true);

    const element = document.getElementById('page-to-save'); // 캡처할 요소의 ID로 대체하세요.
    if (element) {
      domtoimage.toPng(element, { cacheBust: true }).then((dataUrl) => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'result-sea.png'; // 원하는 파일명으로 대체하세요.
        link.click();
        setIsImgCapture(true);
        setIsLoading(false);

        setTimeout(() => {
          setIsImgCapture(false);
          setIsLoading(false);
        }, 2000);
      });
    }
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
    analytics.track('click_link_copy');
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

    // 화면 전체의 6/4 지점
    const halfHeight = (document.body.scrollHeight - 1000) * (5 / 7);

    // 스크롤이 화면 전체 높이의 6/4를 넘어서면 isScrolledHalf 값을 true로 변경합니다.
    if (position > halfHeight && !isScrolledHalf) {
      setOpenReviewModal(true);
      setIsScrolledHalf(true);
    }
  };

  const handleKakao = () => {
    if (window.Kakao) {
      // Kakao SDK가 로드된 후에 실행할 코드
      analytics.track('click_kakao_share');

      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: `나의 바다 ${seaData.beach}, 당신도 나와 같은 바다라면 같이 여행 갈래요?`,
          description: '#바다추천 #성향테스트 #바다여행',
          imageUrl: `https://d27aaiwdisjvn.cloudfront.net/${seaData.beach_eng}`,
          link: {
            mobileWebUrl: `https://badada.gibal.net/result/${seaData.beach_eng}`,
            webUrl: `https://badada.gibal.net/result/${seaData.beach_eng}`,
          },
        },
        buttons: [
          {
            title: '테스트 하러가기',
            link: {
              mobileWebUrl: `https://badada.gibal.net/`,
              webUrl: `https://badada.gibal.net/`,
            },
          },
        ],
      });
    } else {
      // Kakao SDK가 로드되지 않은 경우 처리
      navigate('/error');
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
    if (beachEng) {
      callGetSeaApi(beachEng)
        .then((response: any) => {
          const { data } = response;
          setSeaData(data);
        })
        .catch((error: any) => {
          navigate('/error');
        });
      window.scrollTo(0, 0);
    }
  }, [beachEng]);
  const getIsPrevOpen = window.localStorage.getItem('isPrevPath');

  if (!seaData) return <div />;

  return (
    <PageLayout includeLogo={false} key={seaData.beach}>
      <ResultPage $resultSeaImg={`https://d27aaiwdisjvn.cloudfront.net/${seaData?.beach_eng}`}>
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
            handleKakao={handleKakao}
            handleMoveToAllSea={handleMoveToAllSea}
            score={{
              total: seaData?.user_cnt?.total_user_cnt,
              score: seaData?.user_cnt?.mbti_cnt,
              scoreIndex: seaData?.rank,
            }}
            worstSea={{ worstSeaText: seaData?.bad_beach[0], worstSeaEng: seaData?.bad_beach[1] }}
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
        {isLoading && (
          <div className='img-capture'>
            <Toast text='저장중' isLoadingState />
          </div>
        )}
        {isImgCapture && (
          <div className='img-capture'>
            <Toast text='이미지가 캡쳐되었습니다' isLoadingState={false} />
          </div>
        )}
        {isLinkCopy && (
          <div className='link-copy'>
            <Toast text='링크가 복사되었습니다' isLoadingState={false} />
          </div>
        )}
      </ResultPage>
      {openTotalSeaModal && <TotalSeaModal onClose={handleMoveToAllSea} />}
      {!getIsPrevOpen && <ReviewModal onClose={handleReviewModal} isOpen={openReviewModal} />}
    </PageLayout>
  );
}

const ResultPage = styled.div<{ $resultSeaImg?: string }>`
  // TODO: alignCenter 변수화? - scss mixin
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.pageStyles.height};

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
    padding: 0 30px;
  }
  .all-sea-btn {
    width: 100%;
    padding: 0 30px;
    margin: 40px 0 0 0;
  }
  .re-start-btn {
    width: 100%;
    padding: 0 30px;
    margin: 40px 0 40px 0;
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
