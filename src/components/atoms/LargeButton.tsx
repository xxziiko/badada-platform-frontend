import React from 'react';
import DefaultButton from './DefaultButton';

interface Props {
  text?: string | React.ReactElement;
  onClick: Function;
}

// TODO: Default Button 속성에 size를 static 하게 정의 해놓기
// e.g ) <DefaultButton size="large" /> 형식
export default function LargeButton({ text = 'Large Button', onClick }: Props) {
  return <DefaultButton text={text} onClick={onClick} style={{ padding: '0 40px', height: '80px' }} />;
}
