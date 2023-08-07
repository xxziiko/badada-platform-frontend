import React from 'react';
import styled, { css } from 'styled-components';
import { isMobile } from 'react-device-detect';

import Logo from '@components/atoms/Logo';

interface Props {
  children: React.ReactNode;
  includeLogo?: boolean;
}

export default function PageLayout({ children, includeLogo = true }: Props) {
  const minHeight = (() => {
    if (isMobile) return window?.screen?.height;
    return null;
  })();

  return (
    <TemplateContainer>
      <TemplateWrapper $minHeight={minHeight}>
        <ChildrenWrapper>{children}</ChildrenWrapper>
        {includeLogo && (
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        )}
      </TemplateWrapper>
    </TemplateContainer>
  );
}

const TemplateContainer = styled.section`
  display: flex;
  justify-content: center;
`;

const TemplateWrapper = styled.div<{ $minHeight: number | null }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  max-width: ${({ theme }) => theme.pageStyles.maxWidth};
  min-height: ${({ theme, $minHeight }) => ($minHeight !== null ? `${$minHeight}px` : theme.pageStyles.minHeight)};
  box-shadow: ${({ theme }) => theme.shadow.page};
  animation: ${({ theme }) => css`
    ${theme.animation.fadeIn} 1s
  `};
`;

const ChildrenWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;
