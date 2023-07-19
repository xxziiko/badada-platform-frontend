import React from 'react';
import styled from 'styled-components';

interface Props {
  width?: string;
  height?: string;
}

export default function Logo({ width, height }: Props) {
  return (
    <ImageWrapper width={width} height={height}>
      <Image src='/logo.svg' alt='logo' />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div<{ width?: string; height?: string }>`
  width: ${(props) => props.width || '110px'};
  height: ${(props) => props.height || 'auto'};
`;

const Image = styled.img`
  width: '100%';
  height: '100%';
`;
