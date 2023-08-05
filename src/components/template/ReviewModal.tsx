import { useState } from 'react';
import styled from 'styled-components';
import { useReview } from '@shared/store';
import ReviewButton from '@components/atoms/ReviewButton';
import DefaultButton from '@components/atoms/DefaultButton';
import ReviewTagBox from '@components/organisms/ReviewTagBox';
import Modal from '@components/layouts/ModalLayout';

import { postFeedback } from '@api/apis';

interface Props {
  onClose: Function;
}

interface Body {
  feedback: string;
  choice: (number | string)[];
}

export default function ReviewModal({ onClose }: Props) {
  const { isBadClicked, isGoodClicked, setIsBadClicked, setIsGoodClicked } = useReview();
  const [input, setInput] = useState('');
  const [body, setBody] = useState<Body>({
    feedback: '',
    choice: [],
  });

  const badTextList = [
    { id: 0, text: '결과가 마음에 안들어요' },
    { id: 1, text: '사용하기 불편해요' },
    { id: 2, text: '재미없어요' },
    { id: 3, text: '질문이 별로예요' },
    { id: 4, text: '잘 모르겠어요' },
  ];

  const goodTextList = [
    { id: 0, text: '결과가 마음에 들어요' },
    { id: 1, text: '사용하기 편해요' },
    { id: 2, text: '재미있어요' },
    { id: 3, text: '질문이 좋았어요' },
    { id: 4, text: '잘 모르겠어요' },
  ];

  const handleClickBadButton = () => {
    setIsBadClicked();
    setInput('');
    setBody({
      feedback: 'bad',
      choice: [],
    });
  };

  const handleClickGoodButton = () => {
    setIsGoodClicked();
    setInput('');
    setBody({
      feedback: 'good',
      choice: [],
    });
  };

  const handleSubmitFeedback = (text: string) => {
    const postBody = {
      feedback: body.feedback,
      choice: [...body.choice, text],
    };

    postFeedback(postBody);
  };

  const setArray = (id: number | string) => {
    const array: (number | string)[] = [...body.choice];
    const index = array.indexOf(id);

    if (index !== -1) {
      array.splice(index, 1);
      return array;
    }
    array.push(id);

    return array;
  };

  const handleClickTag = (id: number | string) => {
    const choice = setArray(id);

    setBody({
      ...body,
      choice,
    });
  };

  return (
    <Modal onClose={onClose}>
      <ModalInner onClick={(e) => e.stopPropagation()}>
        <Title>콘텐츠는 마음에 드셨나요?</Title>

        <Buttons>
          <ReviewButton text='좋았어요!' icon='good' onClick={handleClickGoodButton} />
          <ReviewButton text='별로예요.' icon='bad' onClick={handleClickBadButton} />
        </Buttons>

        {isGoodClicked && <ReviewTagBox data={goodTextList} onClick={handleClickTag} />}

        {isBadClicked && <ReviewTagBox data={badTextList} onClick={handleClickTag} />}

        <Input
          placeholder='추가적인 피드백을 작성해주시면 재미있는 콘텐츠 제작에 많은 도움이 됩니다!'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <DefaultButton text='평가 보내기' onClick={() => handleSubmitFeedback(input)} />
      </ModalInner>
    </Modal>
  );
}

const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 40px;
  max-width: 333px;
  gap: 30px;
  align-self: stretch;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
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
  align-self: stretch;
  height: 100px;
  padding: 16px;
  align-items: flex-start;
  gap: 10px;
  resize: none !important;
  border-radius: 4px;
  border: 1px solid #e4e4e4;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.input};
`;
