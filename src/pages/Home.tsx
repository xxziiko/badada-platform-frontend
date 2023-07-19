import React from 'react';

// TODO: import 규칙
import { useStore } from '@shared/store';

import DefaultButton from '@components/atoms/DefaultButton';
import LargeButton from '@components/atoms/LargeButton';
import Logo from '@components/atoms/Logo';
import PrevButton from '@components/atoms/PrevButton';
import ReviewTag from '@components/atoms/ReviewTag';

export default function Home() {
  const { selectContent, setSelectContent } = useStore();

  return <div>Home</div>;
}
