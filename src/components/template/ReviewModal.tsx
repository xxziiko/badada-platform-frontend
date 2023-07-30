import styled from 'styled-components';
import { useReview } from '@shared/store';
import ReviewButton from '@components/atoms/ReviewButton';
import DefaultButton from '@components/atoms/DefaultButton';
import ReviewTagBox from '@components/organisms/ReviewTagBox';

export default function ReviewModal() {
  const { isBadClicked, setIsBadClicked, setIsGoodClicked } = useReview();

  const handleOnClickBadButton = () => {
    setIsBadClicked();
  };

  const handleOnClickGoodButton = () => {
    setIsGoodClicked();
  };

  return (
    <Modal>
      <ModalInner>
        <Title>콘텐츠는 마음에 드셨나요?</Title>

        <Buttons>
          <ReviewButton text='좋았어요!' icon='good' onClick={handleOnClickGoodButton} />
          <ReviewButton text='별로예요.' icon='bad' onClick={handleOnClickBadButton} />
        </Buttons>

        {isBadClicked && <ReviewTagBox />}

        <Input placeholder='추가적인 피드백을 작성해주시면 재미있는 콘텐츠 제작에 많은 도움이 됩니다!' />

        <DefaultButton text='평가 보내기' />
      </ModalInner>
    </Modal>
  );
}

const Modal = styled.div`
  display: flex;
  width: 333px;
  padding: 40px 20px;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 4px 2px rgba(145, 205, 248, 0.25);
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  align-self: stretch;
`;

const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  align-self: stretch;
`;

const Title = styled.div`
  color: #353535;
  text-align: center;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Input = styled.textarea`
  display: flex;
  height: 100px;
  padding: 16px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-radius: 4px;
  border: 1px solid #e4e4e4;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.inputs};
  resize: none;
`;
