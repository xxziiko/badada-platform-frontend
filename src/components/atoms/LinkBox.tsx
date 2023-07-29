import React, { useState, useEffect } from 'react';
import { ReactComponent as LinkImg } from '@assets/LinkImg.svg';
import { ReactComponent as LinkCopy } from '@assets/LinkCopy.svg';
import { ReactComponent as LinkKakao } from '@assets/LinkKakao.svg';
import styled from 'styled-components';

interface Props {
  handleImgCopy: Function;
}

export default function LinkBox({ handleImgCopy }: Props) {
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
    // 현재 페이지의 URL 가져오기
    const currentUrl = window.location.href;

    // 클립보드에 URL 복사하기
    copyToClipboard(currentUrl);
  };

  return (
    <LinkBoxWrapper>
      <span className='sharedFriend'>공유하고 같이갈 친구 찾으러 가자</span>
      <div className='LinkItemWrapper'>
        <button
          className='sharedIconWrapper'
          type='button'
          onClick={() => {
            handleImgCopy();
          }}
        >
          <LinkImg />
        </button>
        <button className='sharedIconWrapper' type='button' onClick={handleLinkCopy}>
          <LinkCopy />
        </button>
        <button className='sharedIconWrapper' type='button'>
          <LinkKakao />
        </button>
      </div>
    </LinkBoxWrapper>
  );
}

const LinkBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .sharedFriend {
    color: ${({ theme }) => theme.colors.darkMatter};
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .LinkItemWrapper {
    display: flex;
    justify-content: space-between;
    width: 196px;
    margin-top: 20px;
    .sharedIconWrapper {
      cursor: pointer;
    }
  }
`;
