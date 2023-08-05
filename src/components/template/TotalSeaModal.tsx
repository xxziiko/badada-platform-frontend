import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SeaCard from '@components/organisms/SeaCard';
import Modal from '../layouts/ModalLayout';
import { useNavigate } from 'react-router-dom';
import { colors } from '@styles/theme';
import { getRank } from '@api/apis';

interface Props {
  onClose: Function;
}

type Data = {
  beach: string;
  beach_cat: string[];
  mbti: string;
  mbti_cnt: number;
  total_user_cnt: number;
};

export default function TotalSeaModal({ onClose }: Props) {
  const navigate = useNavigate();
  const [cardData, setCardData] = useState([]);

  const goToResult = (mbti: string) => {
    navigate(`/result/${mbti}`);
  };

  useEffect(() => {
    getRank()
      .then((response: any) => {
        const { data } = response;
        // console.log('Rank data:', data);
        const copy = data.slice().sort((a: Data, b: Data) => b.mbti_cnt - a.mbti_cnt);
        setCardData(copy);
      })
      .catch((error) => {
        // console.error('An error occurred:', error);
      });
  }, []);

  return (
    <Modal onClose={onClose} headerBackground={colors.lightblue}>
      <CardBox>
        {cardData?.map((list: Data, idx: number) => (
          <SeaCard key={list?.mbti} list={list} onClick={goToResult} index={idx} />
        ))}
      </CardBox>
    </Modal>
  );
}

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 30px;
  gap: 20px;
  align-self: stretch;
`;
