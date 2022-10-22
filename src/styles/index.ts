export type ThemeType = {
  primaryColor: string;
  backgroundColor: string;
  navbarColor: string;
  screenBackgroundColor: string;
  primaryColorText: string;
  secondaryColorText: string;
  facebookColor: string;
  googleColor: string;
  yellowColor: string;
  smallPadding: number;
  largePadding: number;
  padding: number;
  border: number;
  margin: number;
};

const theme = {
  smallPadding: 2,
  largePadding: 8,
  padding: 4,
  border: 50,
  margin: 8,
  smallMargin: 4,
  largeMargin: 12,
  yellowColor: '#F8C330',
  facebookColor: '#3B5998',
  googleColor: '#DD4B39',
};

export const darkTheme: ThemeType = {
  ...theme,
  primaryColor: '#ef010b',
  backgroundColor: '#ffff',
  primaryColorText: '#09101D',
  secondaryColorText: '#bbbbbb',
  screenBackgroundColor: '#222',
  navbarColor: '#111111',
};

export const lightTheme: ThemeType = {
  ...theme,
  primaryColor: '#ef010b',
  backgroundColor: '#ffff',
  primaryColorText: '#2f2f2f',
  secondaryColorText: '#292929',
  screenBackgroundColor: '#222222',
  navbarColor: '#ffff',
};
