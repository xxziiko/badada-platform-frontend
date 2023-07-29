import React from 'react';
import styled from 'styled-components';

import Logo from '@components/atoms/Logo';

interface Props {
  children: React.ReactElement;
}

export default function ImageBackground({ children }: Props) {
  return (
    <BackgroundWrapper>
      {children}
      <div className='logo-wrapper'>
        <Logo />
      </div>
    </BackgroundWrapper>
  );
}

const BackgroundWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 30px;
  width: ${({ theme }) => theme.templateSize.width};
  min-height: ${({ theme }) => theme.templateSize.minHeight};
  height: 100%;
  background-image: url('/img/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
`;
