import React from 'react';
import { useNavigate } from 'react-router-dom';
import { colors } from '@styles/theme';

import { styled } from 'styled-components';
import DefaultButton from '@components/atoms/DefaultButton';

export default function ErrorTemplate() {
  const navigate = useNavigate();

  return (
    <LayoutBox>
      <ErrorBanner>
        <p className='header'>Error</p>
        <p className='content'> 서비스 이용에 불편을 드려서 죄송합니다.</p>
      </ErrorBanner>

      <Section>
        <p className='text'>
          더 나은 서비스를 위해 노력하겠습니다. <br />
          문제 현상이 반복된다면 <br /> 아래 제보하기를 클릭해주세요.
        </p>

        <ButtonBox>
          <DefaultButton
            text='처음으로 돌아가기'
            onClick={() => navigate('/')}
            style={{ backgroundColor: `${colors.error}` }}
          />

          <button type='button' className='text-button'>
            제보하기
          </button>
        </ButtonBox>
      </Section>
    </LayoutBox>
  );
}

const LayoutBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
  height: 100%;
  flex: 1 0 0;
`;

const ErrorBanner = styled.div`
  display: flex;
  width: 393px;
  padding: 40px 30px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  background: rgba(215, 0, 0, 0.25);
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 100vw;
  }
  .header {
    color: #af0000;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .content {
    color: #d46262;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const Section = styled.section`
  display: flex;
  padding-top: 100px;
  flex-direction: column;
  align-items: center;
  width: 332px;
  gap: 100px;
  flex: 1 0 0;

  .text {
    color: #353535;
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 34px;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  align-self: stretch;

  .text-button {
    color: #353535;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-decoration-line: underline;
  }
`;
