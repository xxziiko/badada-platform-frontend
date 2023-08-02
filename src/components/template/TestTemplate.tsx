import React from 'react';
import styled from 'styled-components';

import LargeButton from '@components/atoms/LargeButton';
import PrevButton from '@components/atoms/PrevButton';
import ProgressBar from '@components/atoms/ProgressBar';

interface Props {
  step: number;
  data: { id: number; question?: string; answer: { id: number; content: string }[] };
  onSelect: Function;
  onPrevButtonClick?: Function;
}

export default function TestTemplate({ step, data, onSelect, onPrevButtonClick }: Props) {
  return (
    <TestTemplateWrapper>
      <ProgressBar idx={step} />
      <QuestionWrapper>{data?.question}</QuestionWrapper>
      <div>
        {data?.answer?.map((element) => (
          <div className='selectButton-wrapper' key={element.id}>
            <LargeButton text={element.content} onClick={() => onSelect()} />
          </div>
        ))}
      </div>
      {step !== 1 && (
        <PrevButton
          onClick={() => {
            if (onPrevButtonClick) {
              onPrevButtonClick();
            }
          }}
        />
      )}
    </TestTemplateWrapper>
  );
}

const TestTemplateWrapper = styled.div`
  height: 100%;

  .selectButton-wrapper {
    margin-bottom: 10px;
  }
`;

// TODO: text , 있을 시에 <br/> 태그 추가하는 convert 함수?
const QuestionWrapper = styled.h2`
  display: flex;
  align-items: center;
  height: 320px;
  font-size: 26px;
  font-weight: 600;
`;
