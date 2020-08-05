import 'styled-components';

const colors = {
  grey: '#353535',
  grey10: '#d9d9d9',
  blue: '#2b63e7',
  blue10: '#284b63',
  green: '#29ac45',
  green10: '#3c6e71',
  red: '#eb514a',
  yellow: '#febd5f',
  violet: '#7141be',
  white: '#ffffff',
};

const devices = {
  mobile: `(max-width: 767px)`,
  desktop: `(min-width: 1024px)`,
};

const theme = {
  name: 'light',

  colors: {
    ...colors,

    primary: colors.grey,
    success: colors.green,
    warning: colors.yellow,
    error: colors.red,

    background: colors.white,
    border: colors.grey10,

    text: {
      primary: colors.grey,
      secondary: colors.blue10,
      link: colors.green10,
    },
  },
  spacing: {
    s01: '3rem',
    s02: '2rem',
    s03: '1.5rem',
    s04: '1rem',
    s05: '0.5rem',
    s06: '0.25rem',
  },
  weight: {
    light: 100,
    book: 200,
    roman: 300,
    normal: 400,
    medium: 500,
    semiHeavy: 600,
    heavy: 700,
    black: 800,
  },
  device: {
    ...devices,
  },
  zIndex: {
    background: 0,
    floating: 2,
    navigation: 4,
    overlay: 6,
    modal: 8,
  },
};

export type Theme = typeof theme;

export default theme as Theme;

declare module 'styled-components' {
  // eslint-disable-next-line
  export interface DefaultTheme extends Theme {}
}
