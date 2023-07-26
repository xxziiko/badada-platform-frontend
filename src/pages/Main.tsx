import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import DefaultButton from '@components/atoms/DefaultButton';
import ImageBackground from '@components/template/ImageBackground';

export default function Main() {
  const navigate = useNavigate();

  return (
    <ImageBackground>
      <MainPage>
        <h1>
          <p>
            이번
            <br /> 여름에
            <br /> <span>바다</span>어때?
          </p>
        </h1>

        {/* TODO: 컴포넌트에 classname 속성을 직접 커스텀 하고 싶을 때 ? - ...rest 문법 사용 ? -> type 지정 고려 */}
        <DefaultButton text='바다 찾기 시작하기' onClick={() => navigate('/test')} />
        <p className='start-welcomeText'>
          바다다 테스트를 이미 여러 사람들이 참여했어요! <br /> 여름 시즌을 맞이해 여러분의 데이터를 활용하여 딱 맞는
          바다를 알려드릴게요
        </p>

        {/* TODO: logo style custom -> style 객체 props로 넘겨줄 수 있도록 interface 확장 필요 가능성 ? 왜냐면 항상 fix된 위치 */}
      </MainPage>
    </ImageBackground>
  );
}

const MainPage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.templateSize.width};
  height: 100%;

  h1 {
    margin-bottom: 30px;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.h1};
    font-weight: 600;
    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .start-welcomeText {
    margin-top: 20px;
    text-align: center;
    width: 80%;
  }
`;
