import { DefaultTheme, keyframes } from 'styled-components';

export const pageStyles = {
  width: '393px',
  minWidth: '393px',
  minHeight: '664px',
  padding: '40px 30px',
};

export const colors = {
  primary: '#2B7CB7',
  secondary: '#34C5EF',
  error: '#D54463',
  white: '#fefefe',
  gray: '#AFAFAF',
  darkgray: '#6C6C6C',
  black: '#000000',
  lightblue: '#e3f1fb',
  cornflowerblue: '#4DACF1',
  lavenderpink: '#EFCCFF',
  softAqua: '#ECF7FF',
  mintCream: '#D3FFCC',
  purpleheart: '#A94DF1',
  olivedrab: '#549F31',
  darkMatter: '#353535',
  navy: '#21608D',
};

export const fontSize = {
  h1: '60px',
};

export const shadow = {
  default: '0px 2px 4px 0px rgba(0, 0, 0, 0.15)',
  page: '0px 0px 8px 4px rgba(0, 0, 0, 0.05)',
  input: '0px 0px 4px 0px rgba(0, 0, 0, 0.15)',
};

export const animation = {
  fadeIn: keyframes`from { opacity: 0 } to { opacity: 1 }`,
  slideInFromBottom: keyframes`from { transform: translateY(40px) } to { transform: translateY(0) }`,
  bounceUp: keyframes`0% { transform: translateY(0) } 50% { transform: translateY(-20px) } 100% { transform: translateY(0) }`,
};

export const media = {
  mobile: '480px',
};

export type ColorsTypes = typeof colors;
export type FontSizeTypes = typeof fontSize;

const theme: DefaultTheme = {
  pageStyles,
  colors,
  fontSize,
  shadow,
  animation,
  media,
};

export default theme;
