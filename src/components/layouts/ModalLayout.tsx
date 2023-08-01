import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '@assets/CloseIcon.svg';

interface Props {
  children: ReactNode;
  onClose: Function;
  headerBackground?: string;
  top?: number;
}

export default function ModalLayout({ children, onClose, headerBackground, top = 35 }: Props) {
  return (
    <Background>
      <Layout $top={top}>
        <ButtonBox headerBackground={headerBackground}>
          <button type='button' onClick={() => onClose()} className='button'>
            <CloseIcon />
          </button>
        </ButtonBox>

        <div className='content'>{children}</div>
      </Layout>
    </Background>
  );
}

const Background = styled.div`
  position: absolute;
  top: 0;
  width: 393px;
  height: 100%;
  background: rgba(53, 53, 53, 0.3);
  z-index: 999;
`;

const Layout = styled.div<{ $top: number }>`
  position: absolute;
  top: ${(props) => props.$top}%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 333px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 4px 2px rgba(145, 205, 248, 0.25);
  transform: translate(-50%, -50%);
  /* z-index: 999 !important; */

  .content {
    width: 100%;
  }
`;

const ButtonBox = styled.div<{ headerBackground?: string }>`
  display: flex;
  align-items: center;
  justify-content: right;
  width: 100%;
  height: 100%;
  padding: 10px 5px 0 0;
  background-color: ${(props) => props.headerBackground};
  border-radius: 8px 8px 0 0;

  .button {
    border: none;
    background-color: transparent;
    box-shadow: none;
  }
`;
