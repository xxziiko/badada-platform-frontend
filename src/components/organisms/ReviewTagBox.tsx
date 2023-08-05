import styled from 'styled-components';
import ReviewTag from '@components/atoms/ReviewTag';

type TextData = {
  id: number;
  text: string;
};

interface Props {
  data: TextData[];
  onClick: Function;
}

export default function ReviewTagBox({ data, onClick }: Props) {
  return (
    <TagBox>
      {data.map((value) => (
        <ReviewTag text={value.text} key={value.id} onClick={onClick} id={value.id} />
      ))}
    </TagBox>
  );
}

const TagBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  align-self: stretch;
  flex-wrap: wrap;
`;
