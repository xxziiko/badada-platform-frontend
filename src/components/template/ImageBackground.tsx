import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

export default function ImageBackground({ children }: Props) {
  return <BackgroundWrapper>{children}</BackgroundWrapper>;
}

const BackgroundWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('/img/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
`;
