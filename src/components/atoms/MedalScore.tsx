import styled from 'styled-components';
import MedalIcon from './MedalIcon';

type scoreObject = {
  total: number;
  score: number;
  scoreIndex: number;
};

interface Props {
  score: scoreObject;
  handleMoveToAllSea: Function;
}

export default function MedalScore({ score, handleMoveToAllSea }: Props) {
  return (
    <MedalScoreWrapper
      onClick={() => {
        handleMoveToAllSea();
      }}
    >
      <span className='score-sea-title'>내 바다 순위</span>
      <div className='medal-icon-img'>
        <MedalIcon index={score.scoreIndex} />
      </div>
      <span className='score-sea-name'>
        {score.total}명 중 {score.score}명
      </span>
      <button
        className='score-sea-btn'
        type='button'
        // onClick={() => {
        //   handleWorstSea();
        // }}
      >
        전체 순위 보기
      </button>
    </MedalScoreWrapper>
  );
}

const MedalScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  cursor: pointer;
  .score-sea-title {
    color: ${({ theme }) => theme.colors.darkMatter};
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .medal-icon-img {
    width: 90px;
    height: 90px;
    border-radius: 50px;
    margin: 18px 0 16px 0;
  }
  .score-sea-name {
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .score-sea-btn {
    padding: 2px 8px;
    margin-top: 4px;
    border-radius: 50px;
    background: #21608d;
    color: ${({ theme }) => theme.colors.white};
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
