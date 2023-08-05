import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { resultStore } from '@shared/store';
import PageLayout from '@components/layouts/PageLayout';
import TestTemplate from '@components/template/TestTemplate';

import { getQna, sendResult } from '@api/services';

export default function Test() {
  const { setResult } = resultStore();
  const [qnaList, setQnaList] = useState([]);
  const [answers, setAnswer] = useState<number[]>([]);
  const [step, setStep] = useState(0);

  const navigate = useNavigate();
  const pageNumber = 12;

  const navigateToProcess = () => {
    setTimeout(() => {
      navigate('/process');
    }, 200);
  };

  const updateAnswers = (index: number, elementId: number) => {
    if (step === pageNumber) return null;

    const updatedAnswers: number[] = [...answers];
    updatedAnswers[index] = elementId;
    return setAnswer(updatedAnswers);
  };

  const handleOnSelect = (index: number, elementId: number) => {
    if (step === qnaList.length - 1) {
      navigateToProcess();
    }
    updateAnswers(index, elementId);
    return setStep(step + 1);
  };

  const getQnaList = () => {
    return getQna().then((data) => setQnaList(data));
  };

  const sendAnswers = () => {
    return sendResult(answers);
  };

  useEffect(() => {
    const isLastPage = step === pageNumber;
    if (isLastPage) sendAnswers().then((response) => setResult(response.data));
  }, [step]);

  useEffect(() => {
    getQnaList();
  }, []);

  return (
    <PageLayout includeLogo>
      <TestTemplate
        index={step}
        // 마지막 데이터 + 1을 해서 프로그레스바가 넘어가는 모션을 보여줄 시간 벌기, 그 동안은 마지막 데이터 보여주기
        data={step === qnaList.length ? qnaList[step - 1] : qnaList[step]}
        onSelect={(index: number, elementId: number) => {
          handleOnSelect(index, elementId);
        }}
        onPrevButtonClick={() => {
          setStep(step - 1);
        }}
      />
    </PageLayout>
  );
}
