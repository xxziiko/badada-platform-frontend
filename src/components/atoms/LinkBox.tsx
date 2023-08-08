import styled from 'styled-components';
import { ReactComponent as LinkImg } from '@assets/LinkImg.svg';
import { ReactComponent as LinkCopy } from '@assets/LinkCopy.svg';
import { ReactComponent as LinkKakao } from '@assets/LinkKakao.svg';

interface Props {
  handleImgCopy: Function;
  handleLinkCopy: Function;
  handleKakao: Function;
}

export default function LinkBox({ handleImgCopy, handleLinkCopy, handleKakao }: Props) {
  return (
    <LinkBoxWrapper>
      <span className='shared-friend'>공유하고 같이갈 친구 찾으러 가자</span>
      <div className='link-item-wrapper'>
        <button
          className='shared-icon-wrapper'
          type='button'
          onClick={() => {
            handleImgCopy();
          }}
        >
          <LinkImg />
        </button>
        <button
          className='shared-Icon-wrapper'
          type='button'
          onClick={() => {
            handleLinkCopy();
          }}
        >
          <LinkCopy />
        </button>
        <button
          className='shared-Icon-wrapper'
          type='button'
          onClick={() => {
            handleKakao();
          }}
        >
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
  .shared-friend {
    color: ${({ theme }) => theme.colors.darkMatter};
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .link-item-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .sharedIconWrapper {
      cursor: pointer;
    }
  }
`;
