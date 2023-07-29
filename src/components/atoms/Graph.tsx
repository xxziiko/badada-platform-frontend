import React from 'react';
import { styled } from 'styled-components';

interface Props {
  percentageGraph: number; // 0부터 100 사이의 값
  size: number; // 원의 지름
  strokeWidth: number; // 원의 테두리 두께
  color: string; // 색상
  percent: number; // 가운데에 넣을 글자
  textColor: string; // 글자의 색상
  fontSize: number; // 글자의 크기
  totalPerson: number;
}

export default function Graph({
  percentageGraph,
  size,
  strokeWidth,
  color,
  percent,
  textColor,
  fontSize,
  totalPerson,
}: Props) {
  const radius = size / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (percentageGraph / 100) * circumference;

  return (
    <GrapWrapper>
      <span className='graphTitle'>내 유형 순위</span>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* 외부 원 */}
        <circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          fill='none'
          stroke='white' // 외부 원의 테두리 색상 (선택 사항)
          strokeWidth={strokeWidth}
        />

        {/* 내부 원 */}
        <circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          fill='none'
          stroke={color} // 내부 원의 색상
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
        />
        {/* 텍스트 */}
        <text
          x={radius}
          y={radius}
          fill={textColor}
          fontSize={fontSize}
          textAnchor='middle' // 텍스트를 가운데 정렬
          dominantBaseline='middle' // 텍스트를 가운데 정렬
        >
          {percent}%
        </text>
      </svg>
      <span className='graphSubTitle'>총 {totalPerson}명 중</span>
      <span className='graphPercentage'>{percent}%</span>
    </GrapWrapper>
  );
}

const GrapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  .graphTitle {
    margin-bottom: 24px;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: ${({ theme }) => theme.colors.darkMatter};
  }
  .graphSubTitle {
    margin-top: 16px;
    color: ${({ theme }) => theme.colors.darkMatter};
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .graphPercentage {
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
