import Logo from '@components/atoms/Logo';
import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  children: React.ReactNode;
  includeLogo?: boolean;
  customStyles?: boolean;
}

export default function PageLayout({ children, includeLogo = true, customStyles = true }: Props) {
  return (
    <TemplateContainer>
      <TemplateWrapper $customStyles={customStyles}>
        <ChildrenWrapper $customStyles={customStyles}>{children}</ChildrenWrapper>
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

const TemplateWrapper = styled.div<{ $customStyles: boolean }>`
  position: relative;
  width: ${({ theme }) => theme.pageStyles.width};
  min-height: ${({ theme }) => theme.pageStyles.minHeight};
  box-shadow: ${({ theme }) => theme.shadow.page};
  //TODO: result page 스크롤 버그 때문에 result page 에서는 slide 적용 안됨
  animation: ${({ theme, $customStyles }) =>
    $customStyles
      ? css`
          ${theme.animation.fadeIn} 1s, ${theme.animation.slideInFromBottom} 0.6s
        `
      : css`
          ${theme.animation.fadeIn} 1s
        `};
`;

const ChildrenWrapper = styled.div<{ $customStyles: boolean }>`
  padding: ${({ theme, $customStyles }) => ($customStyles ? theme.pageStyles.padding : '')};
  width: 100%;
  height: 100%;
`;

const LogoWrapper = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
`;
