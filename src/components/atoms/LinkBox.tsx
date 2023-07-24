import React, { useState, useEffect } from 'react';
import { ReactComponent as LinkImg } from '@assets/LinkImg.svg';
import { ReactComponent as LinkCopy } from '@assets/LinkCopy.svg';
import { ReactComponent as LinkKakao } from '@assets/LinkKakao.svg';
import styled from 'styled-components';

export default function LinkBox() {
  return (
    <LinkBoxWrapper>
      <span className='sharedFriend'>공유하고 같이갈 친구 찾으러 가자</span>
      <div className='LinkItemWrapper'>
        <div className='LinkImgWrapper'>
          <LinkImg />
        </div>
        <div className='LinkCopyWrapper'>
          <LinkCopy />
        </div>
        <div className='LinkKakaoWrapper'>
          <LinkKakao />
        </div>
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
    .LinkImgWrapper {
      cursor: pointer;
    }
    .LinkCopyWrapper {
      cursor: pointer;
    }
    .LinkKakaoWrapper {
      cursor: pointer;
    }
  }
`;
