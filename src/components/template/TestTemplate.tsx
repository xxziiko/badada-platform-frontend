import React from 'react';
import styled from 'styled-components';

import LargeButton from '@components/atoms/LargeButton';
import PrevButton from '@components/atoms/PrevButton';
import ProgressBar from '@components/atoms/ProgressBar';
import Logo from '@components/atoms/Logo';
// import DefaultButton from '@components/atoms/DefaultButton';

interface Props {
  index: number;
  data: { id: number; content?: string; answer: { id: number; content: string }[] };
  onSelect: Function;
  onPrevButtonClick?: Function;
}

export default function TestTemplate({ index, data, onSelect, onPrevButtonClick }: Props) {
  return (
    <TestTemplateWrapper>
      <ProgressBar idx={index + 1} />
      <QuestionTextWrapper>
        <QuestionText dangerouslySetInnerHTML={{ __html: data?.content ? (data.content as string) : '' }} />
      </QuestionTextWrapper>

      <div>
        {data?.answer &&
          data.answer.map((element) => (
            <div className='selectButton-wrapper' key={element.id}>
              <LargeButton text={element?.content} onClick={() => onSelect(index, element.id)} />
              {/* <DefaultButton text={element?.content} onClick={() => onSelect()} /> */}
            </div>
          ))}
      </div>
      {index !== 0 && (
        <PrevButton
          onClick={() => {
            if (onPrevButtonClick) {
              onPrevButtonClick();
            }
          }}
        />
      )}
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
    </TestTemplateWrapper>
  );
}

const TestTemplateWrapper = styled.div`
  height: 100%;

  .selectButton-wrapper {
    margin-bottom: 10px;
  }
`;

const QuestionTextWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 180px;
`;

const QuestionText = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 34px;
  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
