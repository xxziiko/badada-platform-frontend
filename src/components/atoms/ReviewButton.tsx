import styled from 'styled-components';
import { useReview } from '@shared/store';
import { ReactComponent as ThumbsDown } from '@assets/ThumbsDown.svg';
import { ReactComponent as ThumbsUp } from '@assets/ThumbsUp.svg';

interface Props {
  text: string;
  icon: string;
  onClick: Function;
}

export default function ReviewButton({ text, icon, onClick }: Props) {
  const { isBadClicked, isGoodClicked } = useReview();

  return (
    <Button onClick={() => onClick()}>
      <ButtonIcon>
        <Round>
          {icon === 'good' && <ThumbsUp fill={isGoodClicked ? '#353535' : '#C6C6C6'} />}
          {icon === 'bad' && <ThumbsDown fill={isBadClicked ? '#353535' : '#C6C6C6'} />}
        </Round>
      </ButtonIcon>
      <Text>{text}</Text>
    </Button>
  );
}

const Button = styled.button`
  background-color: transparent;
  box-shadow: none;
  border: none;
  cursor: pointer;
`;

const ButtonIcon = styled.div`
  width: 55px;
  padding: 5px;
`;

const Text = styled.p`
  color: #353535;
  text-align: center;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Round = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: #ececec;
`;
