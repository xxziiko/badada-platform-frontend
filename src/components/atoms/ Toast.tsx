import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as ToastCheck } from '@assets/ToastCheck.svg';
import { ReactComponent as Loading } from '@assets/Loading.svg';

interface Props {
  text?: string;
  isLoadingState: boolean;
}

export default function Toast({ isLoadingState, text = '이미지가 캡쳐되었습니다' }: Props) {
  return (
    <ToastWrapper>
      <div className='icon-wrapper'>{isLoadingState ? <RotatingLoading /> : <ToastCheck />}</div>
      {text}
    </ToastWrapper>
  );
}

const slideInFromBottom = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const ToastWrapper = styled.div`
  display: inline-flex;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
  color: ${({ theme }) => theme.colors.darkMatter};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  animation: ${slideInFromBottom} 0.3s ease-in-out;
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const RotatingLoading = styled(Loading)`
  animation: ${rotateAnimation} 1s linear infinite;
`;
