import Logo from '@components/atoms/Logo';
import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  includeLogo?: boolean;
  customStyles?: boolean;
}

export default function PageLayout({ children, includeLogo = true, customStyles = true }: Props) {
  return (
    <TemplateContainer>
      <TemplateWrapper>
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

const TemplateWrapper = styled.div`
  position: relative;
  width: ${({ theme }) => theme.pageStyles.width};
  min-height: ${({ theme }) => theme.pageStyles.minHeight};
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
