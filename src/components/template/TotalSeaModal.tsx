import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SeaCard from '@components/organisms/SeaCard';
import Modal from '../layouts/ModalLayout';
import { useNavigate } from 'react-router-dom';
import { colors } from '@styles/theme';

import { getRank } from '@api/services';
import { Rank } from '@shared/interface';

interface Props {
  onClose: Function;
  ref: React.RefObject<HTMLDivElement>;
}

export default function TotalSeaModal({ onClose, ref }: Props) {
  const navigate = useNavigate();
  const [cardData, setCardData] = useState([]);

  const goToResult = (mbti: string) => {
    navigate(`/result/${mbti}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // TODO: service 분리
    getRank().then((data) => {
      const copy = data.slice().sort((a: Rank, b: Rank) => b.mbti_cnt - a.mbti_cnt);
      setCardData(copy);
    });
  }, []);

  return (
    <Modal onClose={onClose} headerBackground={colors.lightblue} ref={ref}>
      <CardBox>
        {cardData?.map((list: Rank, idx: number) => (
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
