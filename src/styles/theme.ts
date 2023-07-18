import { DefaultTheme } from 'styled-components';

// TODO: custom 필요

const colors = {
  primary: '#2B7CB7',
  secondary: '#34C5EF',
  white: '#ffffff',
  gray: 'AFAFAF',
  black: '#000000',
};

const fontSize = {
  title: 20,
  subTitle: 16,
  text: 14,
};

const shadow = {
  default: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
};

export type ColorsTypes = typeof colors;
export type FontSizeTypes = typeof fontSize;

const theme: DefaultTheme = {
  colors,
  fontSize,
  shadow,
};

export default theme;
