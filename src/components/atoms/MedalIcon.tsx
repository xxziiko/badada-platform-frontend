import styled from 'styled-components';

interface Props {
  index: number;
  width?: number;
  fontSize?: number;
}

export default function MedalIcon({ index, width = 24, fontSize = 10 }: Props) {
  const ImgUrl = (number: number) => {
    switch (number) {
      case 1:
        return '/img/numbering-first.png';
      case 2:
        return '/img/numbering-second.png';
      case 3:
        return '/img/numbering-third.png';
      default:
        return '/img/numbering-img.png';
    }
  };

  return (
    <div>
      <Icon $imgurl={ImgUrl(index)} $width={width} $fontSize={fontSize}>
        <p className='number'>{index}</p>
      </Icon>
    </div>
  );
}

const Icon = styled.div<{ $imgurl?: string; $width?: number; $fontSize?: number }>`
  display: flex;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$width}px;
  background: center/100% url(${(props) => props.$imgurl});
  .number {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-bottom: 10px;
    padding-right: 1px;
    color: ${({ theme }) => theme.colors.white};
    font-family: Audiowide;
    font-size: ${(props) => props.$fontSize}px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    z-index: 999;
  }
`;
