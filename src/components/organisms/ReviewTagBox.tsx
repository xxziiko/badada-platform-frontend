import styled from 'styled-components';

interface Props {}

export default function ReviewTagBox() {
  return <TagBox>{/* tags */}</TagBox>;
}

const TagBox = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 8px;
  align-self: stretch;
  flex-wrap: wrap;
`;
