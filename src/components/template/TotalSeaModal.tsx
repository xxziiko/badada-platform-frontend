import { useEffect, useState, forwardRef } from 'react';
import styled from 'styled-components';
import SeaCard from '@components/organisms/SeaCard';
import Modal from '../layouts/ModalLayout';
import { useNavigate } from 'react-router-dom';
import { colors } from '@styles/theme';

import { getRank } from '@api/services';
import { Rank } from '@shared/interface';
import { analytics } from '@shared/analytics';

interface Props {
  onClose: Function;
}

const TotalSeaModal = forwardRef<HTMLDivElement, Props>(({ onClose }, ref) => {
  const navigate = useNavigate();
  const [cardData, setCardData] = useState([]);

  const goToResult = (mbti: string) => {
    analytics.track('click_total_sea_item');
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
});

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 30px;
  gap: 20px;
  align-self: stretch;
`;

export default TotalSeaModal;
