export const theme = {
  fontFamily: '"Lexend", sans-serif',
  spacingXXS: '1rem',
  spacingXS: '1.5rem',
  spacingS: '3rem',
  spacingM: '6rem',
  spacingL: '9rem',
  accent: '#F1D300',
  white: '#FFFFFF',
  fontRegular: 400,
  fontMedium: 500,
  fontSemiBold: 600,
  fontBold: 700,
  mainBorderRadius: '10px',
  bigBorderRadius: '20px',
  mainBoxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  bigBoxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  colors: {
    yellow: '#F1D300',
    pink: '#E91E63',
    purple: '#9C27B0',
    indigo: '#3F51B5',
    blue: '#2196F3',
    blueGrey: '#607D8B',
    red: '#F44336',
    cyan: '#00BCD4',
    teal: '#009688',
    orange: '#FF9800'
  }
}

export const lightTheme = {
  ...theme,
  background: '#F7F7F7',
  clearerBackground: '#FEFEFE',
  title: '#212121',
  text1: '#424242',
  text2: '#616161',
  text3: '#757575',
  text4: '#BDBDBD',
  text5: '#EEEEEE'
}

export const darkTheme = {
  ...theme,
  background: '#1F262F',
  clearerBackground: '#252C35',
  title: '#ffffff',
  text1: '#fefefe',
  text2: '#2F2F2F',
  text3: '#D5D5D5',
  text4: '#5C5C5C',
  text5: '#606060'
}

const size = {
  mobileXS: '320px',
  mobileS: '380px',
  mobile: '430px',
  mobileL: '550px',
  tabletXS: '700px',
  tablet: '1000px',
  tabletXL: '1200px',
  laptop: '1500px',
  laptopL: '1792px',
  desktop: '1920px',
  desktopL: '2200px',
  desktopXL: '2560px'
}

export const device = {
  mobileXS: `(max-width: ${size.mobileXS})`,
  mobileS: `(max-width: ${size.mobileS})`,
  mobile: `(max-width: ${size.mobile})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tabletXS: `(max-width: ${size.tabletXS})`,
  tablet: `(max-width: ${size.tablet})`,
  tabletXL: `(max-width: ${size.tabletXL})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktopL})`,
  desktopXL: `(max-width: ${size.desktopXL})`
}

export const updateAccentColor = color => {
  if (theme.colors[color]) {
    darkTheme.accent = theme.colors[color]
    lightTheme.accent = theme.colors[color]
  }
}
