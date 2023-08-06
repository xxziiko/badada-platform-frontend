import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { resultStore } from '@shared/store';

import VideoBackground from '@components/template/VideoBackground';
import DefaultTemplate from '@components/layouts/PageLayout';

export default function Process() {
  const { result } = resultStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (navigate && result) {
      setTimeout(() => {
        navigate(`/result/${result.mbti}`);
      }, 1800);
    }
  }, [navigate, result]);

  return (
    <DefaultTemplate customStyles={false}>
      <VideoBackground>
        <ProcessPage>
          <h1>
            결과 <br />
            <div>
              분석 중
              <ProcessDotsWrapper>
                <ProcessDots />
                <ProcessDots />
                <ProcessDots />
              </ProcessDotsWrapper>
            </div>
          </h1>
          <p>
            당신의 성향을 분석하여 <br />
            일치하는 <span>바다</span>를 <br />
            찾고 있어요
          </p>
        </ProcessPage>
      </VideoBackground>
    </DefaultTemplate>
  );
}

const ProcessPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 75px;
  width: 100%;
  height: 100%;

  h1 {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.h1};
    font-weight: 700;
    & > div {
      display: flex;
      align-items: center;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: 26px;
    font-weight: 600;
    line-height: normal;
    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const ProcessDotsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  width: 50px;
`;

const ProcessDots = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  animation: ${({ theme }) => css`
    ${theme.animation.bounceUp} 0.6s linear
  `};
  &:nth-child(2) {
    animation-delay: 0.6s;
  }
  &:last-child {
    animation-delay: 1.2s;
  }
`;
