import React from 'react';
import styled from 'styled-components';
import SeaCard from '@components/organisms/SeaCard';
import Modal from '../layouts/ModalLayout';
import { useNavigate } from 'react-router-dom';
import { colors } from '@styles/theme';

interface Props {
  onClose: Function;
}

export default function TotalSeaModal({ onClose }: Props) {
  const navigate = useNavigate();

  const goToResult = () => {};

  return (
    <Modal onClose={onClose} headerBackground={colors.lightblue} top={15}>
      <HeaderBox>
        <p className='header'>전체 바다 순위</p>
        <p className='text'>실시간 바다의 순위를 확인해보세요!</p>
      </HeaderBox>

      <CardBox>
        <SeaCard seaName='월정리 해변' per={30} onClick={goToResult} />
      </CardBox>
    </Modal>
  );
}

const HeaderBox = styled.div`
  display: flex;
  padding: 0 30px 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  background-color: ${({ theme }) => theme.colors.lightblue};

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
  /* max-height: 80%; */
  padding: 30px;
  gap: 20px;
  align-self: stretch;
  /* overflow: auto; */
`;
