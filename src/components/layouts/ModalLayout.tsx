import React, { ReactNode, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as CloseIcon } from '@assets/CloseIcon.svg';

interface Props {
  children: ReactNode;
  onClose: Function;
  headerBackground?: string;
}

export default function ModalLayout({ children, onClose, headerBackground }: Props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <Background onClick={() => onClose()}>
      <Layout>
        <ButtonBox $headerBackground={headerBackground}>
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(53, 53, 53, 0.3);
  z-index: 999;
`;

const Layout = styled.div`
  position: absolute;
  top: 5%;
  left: 28.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 333px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 4px 2px rgba(145, 205, 248, 0.25);
  animation: ${({ theme }) => css`
    ${theme.animation.fadeIn} 1s, ${theme.animation.slideInFromBottom} 0.6s
  `};

  .content {
    width: 100%;
  }
`;

const ButtonBox = styled.div<{ $headerBackground?: string }>`
  display: flex;
  align-items: center;
  justify-content: right;
  width: 100%;
  height: 100%;
  padding: 10px 5px 0 0;
  background-color: ${(props) => props.$headerBackground};
  border-radius: 8px 8px 0 0;

  .button {
    border: none;
    background-color: transparent;
    box-shadow: none;
  }
`;
