import styled from 'styled-components';

interface Props {
  text: string;
  icon: string;
}

export default function ReviewButton({ text, icon }: Props) {
  return (
    <ButtonBox>
      <ButtonIcon>
        <img src={icon} alt='icon' />
      </ButtonIcon>
      <Text>{text}</Text>
    </ButtonBox>
  );
}

const ButtonBox = styled.div`
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
