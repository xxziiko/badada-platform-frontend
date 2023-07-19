import styled from 'styled-components';
import ReviewTag from '@components/atoms/ReviewTag';

export default function ReviewTagBox() {
  const textList = [
    { id: 0, text: '결과가 마음에 안들어요' },
    { id: 1, text: '사용하기 불편해요' },
    { id: 2, text: '재미없어요' },
    { id: 3, text: '질문이 별로예요' },
    { id: 4, text: '잘 모르겠어요' },
  ];

  return (
    <TagBox>
      {textList.map((value) => (
        <ReviewTag text={value.text} key={value.id} />
      ))}
    </TagBox>
  );
}

const TagBox = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 6px;
  align-self: stretch;
  flex-wrap: wrap;
`;
