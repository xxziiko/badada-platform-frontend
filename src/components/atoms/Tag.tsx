import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface Props {
  text?: string;
  tagIndex: number;
}

export default function Tag({ text = '조용한', tagIndex = 1 }: Props) {
  return <TagWrapper tagIndex={tagIndex}>{text}</TagWrapper>;
}

const TagWrapper = styled.span<{ tagIndex: number }>`
  padding: 4px 10px;
  border-radius: 4px;
  background: ${({ theme, tagIndex }) =>
    (tagIndex === 1 && theme.colors.lightblue) ||
    (tagIndex === 2 && theme.colors.lavenderpink) ||
    (tagIndex === 3 && theme.colors.mintCream)};
  color: ${({ theme, tagIndex }) =>
    (tagIndex === 1 && theme.colors.cornflowerblue) ||
    (tagIndex === 2 && theme.colors.purpleheart) ||
    (tagIndex === 3 && theme.colors.olivedrab)};
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
