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
    yellow: '#DAB10B',
    purple: '#3D2CDE',
    blue: '#338BF2',
    pink: '#C560CE',
    green: '#54C7BA',
    brown: '#BAA294',
    orange: '#E68F18',
    red: '#DE426C'
  }
}

export const lightTheme = {
  ...theme,
  background: '#F7F7F7',
  lightBackground: '#FEFEFE',
  title: '#212121',
  text1: '#424242',
  text2: '#616161',
  text3: '#757575',
  text4: '#BDBDBD',
  text5: '#EEEEEE',
  text6: '#dcdcdc'
}

export const darkTheme = {
  ...theme,
  background: '#1F262F',
  lightBackground: '#252C35',
  title: '#ffffff',
  text1: '#fefefe',
  text2: '#2F2F2F',
  text3: '#D5D5D5',
  text4: '#5C5C5C',
  text5: '#606060',
  text6: '#c7c7c7'
}

const size = {
  mobileXS: '320px',
  mobileS: '380px',
  mobile: '430px',
  mobileL: '550px',
  tabletS: '700px',
  tablet: '900px',
  tabletL: '1200px',
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
