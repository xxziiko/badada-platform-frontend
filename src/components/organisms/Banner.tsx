import React from 'react';
import styled from 'styled-components';

export default function Banner() {
  const handleMoveToCampaign = () => {
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
        <button className='banner-campaign-btn' type='button' onClick={handleMoveToCampaign}>
          캠페인 참여하기
        </button>
      </div>
    </BannerWrapper>
  );
}

const BannerWrapper = styled.div`
  width: 393px;
  height: 300px;
  .banner-instagram {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 393px;
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
    justify-content: center;
    align-items: flex-end;
    width: 393px;
    height: 155px;
    background:
      url('/img/campaignImg.png'),
      lightgray 50% / cover no-repeat;
    .banner-campaign-btn {
      width: 141px;
      height: 39px;
      margin-bottom: 20px;
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
