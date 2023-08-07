import { analytics } from '@shared/analytics';
import React from 'react';
import styled from 'styled-components';

export default function Banner() {
  const handleMoveToCampaign = () => {
    analytics.track('click_campaign_banner');
    window.open('https://earthplogging.com/', '_blank');
  };

  return (
    <BannerWrapper>
      <div className='banner-instagram'>
        <span className='banner-instagram-text'>
          내 바다를 인스타그램에
          <br />
          <span className='banner-instagram-tag'>#바다테스트 #바라던바다</span> <br />
          해시태그와 함께 인증해주시면
          <br />
          추첨을 통해 <span className='banner-instagram-coffee'>스타벅스 기프티콘</span>을 드립니다!
          <br />
          (총 5명 / ~ 5월 31일)
        </span>
      </div>
      <div className='banner-campaign'>
        <span className='banner-text'>지구와 우리를 위협하는 쓰레기, 이대로 괜찮을까요?</span>
        <button className='banner-campaign-btn' type='button' onClick={handleMoveToCampaign}>
          캠페인 참여하기
        </button>
      </div>
    </BannerWrapper>
  );
}

const BannerWrapper = styled.div`
  width: 100%;
  height: 300px;
  .banner-instagram {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 145px;
    background: ${({ theme }) => theme.colors.softAqua};
    .banner-instagram-text {
      color: ${({ theme }) => theme.colors.darkMatter};
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      .banner-instagram-tag {
        color: ${({ theme }) => theme.colors.navy};
        font-weight: 600;
      }
      .banner-instagram-coffee {
        font-weight: 600;
      }
    }
  }
  .banner-campaign {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 145px;
    background:
      url('/img/campaignImg.jpeg'),
      lightgray 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    .banner-text {
      margin: 0 4px;
      color: ${({ theme }) => theme.colors.white};
      font-size: 14px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      text-align: center;
    }
    .banner-campaign-btn {
      width: 141px;
      height: 39px;
      margin: 10px 0 0 0;
      border-radius: 50px;
      border: 1px solid ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.white};
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      cursor: pointer;
    }
  }
`;
