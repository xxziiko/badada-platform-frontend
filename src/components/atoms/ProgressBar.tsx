import styled from 'styled-components';

interface Props {
  idx: number;
}

export default function ProgressBar({ idx }: Props) {
  return (
    <Box>
      <TitleBox>
        <Text>Q{idx}</Text>
      </TitleBox>

      <Bar />
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
`;

const TitleBox = styled.div`
  display: flex;
  padding: 4px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-bottom: 3px solid #34c5ef;
`;

const Text = styled.p`
  color: #34c5ef;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Bar = styled.div`
  width: 333px;
  height: 16px;
  align-self: stretch;
  border-radius: 20px;
  background: rgba(145, 205, 248, 0.3);
  box-shadow: 1px 1px 4px 0px rgba(145, 205, 248, 0.3) inset;
`;
