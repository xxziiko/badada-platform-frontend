import React from 'react';

// TODO: import 규칙
import { useStore } from '@shared/store';

import DefaultButton from '@components/atoms/DefaultButton';
import LargeButton from '@components/atoms/LargeButton';
import Logo from '@components/atoms/Logo';
import PrevButton from '@components/atoms/PrevButton';
import ReviewTag from '@components/atoms/ReviewTag';
import Tag from '@components/atoms/Tag';
import Graph from '@components/atoms/Graph';
import Banner from '@components/organisms/Banner';
import WorstSea from '@components/atoms/WorstSea';
import SummaryBox from '@components/organisms/SummaryBox';
import ResultCard from '@components/organisms/ResultCard';

export default function Home() {
  const { selectContent, setSelectContent } = useStore();

  return (
    <div>
      Home
      <ResultCard
        seaContent={{
          seaName: '고래불 해변',
          seaContent: [
            '제주도 동쪽에 위치하고 있는 마을인 ‘월정리’는 ‘달이 머문다’는 뜻의 이름을 가진 서정적인 풍경의 마을',
            '수심이 얕아 아이를 동반한 가족이 물놀이 하러 오기 좋음 제주도 올레길 20코스 ‘김녕-하도 올레’와 ‘김녕-월정 지질트레일 코스’의 일부여서 뚜벅이 여행객들이 들리기 좋음',
            '에메랄드 빛 바다와 하얀 모래사장이 인상적이고 풍경이 아름다움 주변에 아담한 카페 거리 조성, 소품샵 등 구경거리 많음',
          ],
        }}
        tagText={['조용한', '낭만적인', '명상']}
        recommendationReason={[
          '타인과의 깊은 연결과 자유로운 대화를 추구하는 특징을 가지고 있습니다. 월정리 해변은 사람들이 많이 찾는 장소로, 이러한 분위기에서 다양한 사람들과의 교류와 즐거운 대화를 즐길 수 있을 것입니다.',
          '창의적이고 상상력이 풍부한 특징을 가지고 있습니다. 월정리 해변은 독특한 지형과 잔잔한 파도를 가진 해안선을 가지고 있어, 이러한 환경에서 자신의 창의적인 아이디어를 발휘하고 새로운 경험을 만들어갈 수 있을 것입니다.',
          '새로운 경험과 자유로움을 추구하는 특징을 가지고 있습니다. 월정리 해변은 아름다운 풍경과 다양한 액티비티를 즐길 수 있는 장소로, 이러한 환경에서 자유로움과 자연과의 교감을 느끼며 자신의 에너지를 발산할 수 있을 것입니다.',
        ]}
      />
    </div>
  );
}
