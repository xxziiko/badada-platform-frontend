import styled from 'styled-components';
import Tag from '@components/atoms/Tag';

interface Props {
  imgurl?: string;
  seaName: string;
  per: number;
  onClick: Function;
}

export default function SeaCard({ seaName, per, imgurl, onClick }: Props) {
  return (
    <Card onClick={() => onClick}>
      <Image $imgurl={imgurl} />
      <ContentBox>
        <div className='layout'>
          <div className='titleLayout'>
            <Icon $imgurl='/img/numbering-first.png'>
              <p className='number'>1</p>
            </Icon>

            {/* <Icon iconUrl='/img/numbering-second.png'>
              <p className='number'>2</p>
            </Icon>

            <Icon iconUrl='/img/numbering-third.png'>
              <p className='number'>3</p>
            </Icon>

            <Icon iconUrl='/img/numbering-img.png'>
              <p className='number'>{number}</p>
            </Icon> */}

            <p className='text'>{seaName}</p>
          </div>
          <p className='persentage'>{per}%</p>
        </div>

        <div>
          <Tag tagIndex={1} />
          <Tag tagIndex={2} />
        </div>
      </ContentBox>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;

  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 2px 4px 2px rgba(145, 205, 248, 0.2);
`;

const Image = styled.div<{ $imgurl?: string }>`
  align-self: stretch;
  height: 150px;
  background: cover no-repeat center/100% url(${(props) => props.$imgurl});
  border-radius: 8px 8px 0 0;
`;

const Icon = styled.div<{ $imgurl?: string }>`
  width: 24px;
  height: 24px;
  background: center/100% url(${(props) => props.$imgurl});

  .number {
    position: relative;
    top: 5px;
    left: 9.5px;
    font-size: 11px;
    color: ${({ theme }) => theme.colors.white};
    font-family: Audiowide;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
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

  .titleLayout {
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
