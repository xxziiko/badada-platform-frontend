import React from 'react';
import styled from 'styled-components';

interface Props {
  height?: string;
  fontSize?: string;
}

export default function Logo({ height, fontSize }: Props) {
  return (
    <LogoWrapper height={height} fontSize={fontSize}>
      <img className='logo_image' src='/logo.jpg' alt='logo' />
      <p className='logo_text'>기발한 사람들</p>
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div<{ height?: string; fontSize?: string }>`
  display: flex;
  align-items: center;
  height: ${(props) => props.height || '22px'};

  img {
    margin-right: 4px;
    width: ${(props) => props.height || '22px'};
    height: 100%;
    border-radius: 4px;
  }

  p {
    color: #353535;
    font-size: ${(props) => props.fontSize || '18px'};
    font-weight: 700;
    white-space: nowrap;
    letter-spacing: -1.8px;
  }
`;
