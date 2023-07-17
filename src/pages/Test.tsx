import React from 'react';

import Header from '@components/Header';
import { useStore } from '@shared/store';

export default function Test() {
  const { selectContent, setSelectContent } = useStore();

  return (
    <div>
      hihi
      <Header />
      <div className='hi'>test</div>
    </div>
  );
}
