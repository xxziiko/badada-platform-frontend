import styled from 'styled-components';
import Tag from '@components/atoms/Tag';
import MedalIcon from '@components/atoms/MedalIcon';

type Data = {
  beach: string;
  beach_cat: string[];
  mbti: string;
  mbti_cnt: number;
  total_user_cnt: number;
};

interface Props {
  onClick: Function;
  list: Data;
  index: number;
}

export default function SeaCard({ list, onClick, index }: Props) {
  const imgUrl = (mbti: string) => {
    const url = `https://d27aaiwdisjvn.cloudfront.net/${mbti}`;
    return url;
  };

  return (
    <Card onClick={() => onClick(list.mbti)}>
      <Image src={imgUrl(list?.mbti)} alt='Sea' />
      <ContentBox>
        <div className='layout'>
          <div className='title-layout'>
            <MedalIcon index={index + 1} fontSize={10} width={24} paddingBottom={2} />

            <p className='text'>{list?.beach}</p>
          </div>
          <p className='persentage'>{((list.mbti_cnt / list.total_user_cnt) * 100).toFixed(1)}%</p>
        </div>

        <div>
          {list?.beach_cat.map((value: string, idx: number) => <Tag key={value} tagIndex={idx} text={value} />)}
        </div>
      </ContentBox>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 2px 4px 2px rgba(145, 205, 248, 0.2);
  z-index: 0;
  cursor: pointer;
`;

const Image = styled.img<{ $imgurl?: () => string }>`
  align-self: stretch;
  height: 150px;
  border-radius: 8px 8px 0 0;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;

  .layout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
  }

  .title-layout {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .text {
    color: #353535;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .persentage {
    color: ${({ theme }) => theme.colors.secondary};
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
