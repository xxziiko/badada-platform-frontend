import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '@components/atoms/Logo';
import TestTemplate from '@components/template/TestTemplate';

const data = [
  {
    id: 1,
    question: '올해 여름 휴가로 바다를 가고 싶은 당신, 누구와 가고 싶나요?',
    answer: [
      { id: 1, content: '단 둘이 간다' },
      { id: 2, content: '여럿이 가야 재밌지, 친구들과 함께 간다.' },
    ],
  },
  {
    id: 2,
    question: '2번 질문',
    answer: [
      { id: 3, content: '2번 답안 - 1' },
      { id: 4, content: '2번 답안 - 2' },
    ],
  },
  {
    id: 3,
    question: '3번 질문',
    answer: [
      { id: 5, content: '3번 답안 - 1' },
      { id: 6, content: '3번 답안 - 2' },
    ],
  },
  {
    id: 4,
    question: '4번 질문',
    answer: [
      { id: 7, content: '4번 답안 - 1' },
      { id: 8, content: '4번 답안 - 2' },
    ],
  },
];

// FIXME: key error 확인
// TODO: classname 컨벤션정하기 (camel vs kebab)

export default function Test() {
  const [currentStep, setCurrentStep] = useState(0);

  const navigate = useNavigate();

  const handleOnSelect = () => {
    if (currentStep === data.length - 1) return navigate('/process');
    return setCurrentStep(currentStep + 1);
  };

  return (
    <TestPage>
      <TestTemplate
        data={data[currentStep]}
        onSelect={() => {
          handleOnSelect();
        }}
        onPrevButtonClick={() => {
          setCurrentStep(currentStep - 1);
        }}
      />
      <div className='logo-wrapper'>
        <Logo />
      </div>
    </TestPage>
  );
}

// TODO: page template을 만들어서 width, height, logo까지?
const TestPage = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px 30px;
  width: ${({ theme }) => theme.templateSize.width};
  height: 100%;
  min-height: ${({ theme }) => theme.templateSize.minHeight};
  border: 1px solid black;

  .logo-wrapper {
    display: flex;
    justify-content: center;
  }
`;
