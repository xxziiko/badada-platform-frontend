import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SeaCard from '@components/organisms/SeaCard';
import Modal from '@components/layouts/ModalLayout';
import { useNavigate } from 'react-router-dom';
import { colors } from '@styles/theme';

import { getRank } from '@api/services';
import { Rank } from '@shared/interface';

interface Props {
  onClose: Function;
}

export default function TotalSeaModal({ onClose }: Props) {
  const navigate = useNavigate();
  const [cardData, setCardData] = useState([]);

  const goToResult = (beachEng: string) => {
    navigate(`/result/${beachEng}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onClose();
  };

  useEffect(() => {
    // TODO: service 분리
    getRank().then((data) => {
      const copy = data.slice().sort((a: Rank, b: Rank) => b.mbti_cnt - a.mbti_cnt);
      setCardData(copy);
    });
  }, []);

  return (
    <Modal onClose={onClose} headerBackground={colors.lightblue}>
      <CardBox>
        {cardData?.map((list: Rank, idx: number) => (
          <SeaCard key={list?.beach_eng} list={list} onClick={goToResult} index={idx} />
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
