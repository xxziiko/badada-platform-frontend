import { ReactNode, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as CloseIcon } from '@assets/CloseIcon.svg';

interface Props {
  children: ReactNode;
  onClose: Function;
  headerBackground?: string;
}

export default function ModalLayout({ children, onClose, headerBackground }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (modalRef && modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Background>
      <Wrapper>
        <div className='modal-inner' ref={modalRef}>
          <ButtonBox $headerBackground={headerBackground}>
            <button type='button' onClick={() => onClose()} className='button'>
              <CloseIcon />
            </button>
          </ButtonBox>

          {headerBackground && (
            <HeaderBox>
              <p className='header'>전체 바다 순위</p>
              <p className='text'>실시간 바다의 순위를 확인해보세요!</p>
            </HeaderBox>
          )}

          <div className='content'>{children}</div>
        </div>
      </Wrapper>
    </Background>
  );
}

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(53, 53, 53, 0.3);
  z-index: 999;
`;

const Wrapper = styled.div`
  max-width: 752px;
  padding: 0 5vw;

  .modal-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 2px 4px 2px rgba(145, 205, 248, 0.25);
    animation: ${({ theme }) => css`
      ${theme.animation.slideInFromBottom} 0.6s
    `};
  }

  .content {
    width: 100%;
    max-height: 75vh;
    overflow: auto;
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

const HeaderBox = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  padding: 0 30px 40px;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 4px;
  background-color: ${({ theme }) => theme.colors.lightblue};
  z-index: 999;

  .header {
    color: #21608d;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .text {
    color: #91cdf8;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
