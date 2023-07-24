import { DefaultTheme } from 'styled-components';

// TODO: custom 필요

const colors = {
  primary: '#2B7CB7',
  secondary: '#34C5EF',
  white: '#FFFFFF',
  gray: '#AFAFAF',
  darkgray: '#6C6C6C',
  black: '#000000',
  lightblue: '#CCEAFF',
  cornflowerblue: '#4DACF1',
  lavenderpink: '#EFCCFF',
  softAqua: '#ECF7FF',
  mintCream: '#D3FFCC',
  purpleheart: '#A94DF1',
  olivedrab: '#549F31',
  darkMatter: '#353535',
  navy: '#21608D',
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
