import React from 'react';
import { ReactComponent as ToastCheck } from '@assets/ToastCheck.svg';
import styled from 'styled-components';

interface Props {
  text?: string;
}

export default function Toast({ text = '이미지가 캡쳐되었습니다' }: Props) {
  return (
    <ToastWrapper>
      <div className='icon-wrapper'>
        <ToastCheck />
      </div>
      {text}
    </ToastWrapper>
  );
}

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
`;
