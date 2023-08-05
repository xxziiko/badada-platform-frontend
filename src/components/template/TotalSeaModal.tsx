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
        const copy = data.slice();
        setCardData(copy);
      })
      .catch((error) => {
        // console.error('An error occurred:', error);
      });
  }, []);

  return (
    <Modal onClose={onClose} headerBackground={colors.lightblue}>
      <HeaderBox>
        <p className='header'>전체 바다 순위</p>
        <p className='text'>실시간 바다의 순위를 확인해보세요!</p>
      </HeaderBox>

      <CardBox>
        {cardData?.map((list: Data, idx) => (
          <SeaCard key={list?.mbti} list={list} per={30} onClick={goToResult} index={idx} />
        ))}
      </CardBox>
    </Modal>
  );
}

const HeaderBox = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  padding: 0 30px 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  background-color: ${({ theme }) => theme.colors.lightblue};
  z-index: 999;

  .header {
    color: #21608d;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .text {
    color: #91cdf8;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 80%;
  padding: 30px;
  gap: 20px;
  align-self: stretch;
`;
