import { DefaultTheme } from "styled-components";

const colors = {
  header: "#1565C0",
  primary: "#2196F3",
  white: "#ffffff",
  black: "#000000",
  buttonOrange: "#FFA000",
  dateText: "#939FA5",
  border: "#E5E5E5",
  toggleOn: "#2196F3",
  toggleOff: "#F5F5F5",
};

const fontSize = {
  title: 20,
  subTitle: 16,
  text: 14,
};

export type ColorsTypes = typeof colors;
export type FontSizeTypes = typeof fontSize;

const theme: DefaultTheme = {
  colors,
  fontSize,
};

export default theme;
