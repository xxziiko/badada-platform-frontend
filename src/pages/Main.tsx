import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import DefaultButton from '@components/atoms/DefaultButton';
import ImageBackground from '@components/template/ImageBackground';
import PageLayout from '@components/layouts/PageLayout';

export default function Main() {
  const navigate = useNavigate();

  return (
    <PageLayout customStyles={false}>
      <ImageBackground>
        <MainPage>
          <MainText>
            <p>
              이번
              <br /> 여름에
              <br /> <span>바다</span>어때?
            </p>
          </MainText>
          <DefaultButton text='바다 찾기 시작하기' onClick={() => navigate('/test')} />
          <MainSubText>
            바다다 테스트를 이미 여러 사람들이 참여했어요! <br /> 여름 시즌을 맞이해 여러분의 데이터를 활용하여 딱 맞는
            바다를 알려드릴게요
          </MainSubText>
        </MainPage>
      </ImageBackground>
    </PageLayout>
  );
}

const MainPage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
  height: 100%;
`;

const MainText = styled.h1`
  margin-bottom: 30px;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.h1};
  font-weight: 700;
  line-height: normal;
  span {
    font-weight: 800;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MainSubText = styled.p`
  margin-top: 20px;
  text-align: center;
  font-size: 13px;
  line-height: 18px;
`;
