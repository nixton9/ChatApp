export const theme = {
  fontFamily: '"Lexend", sans-serif',
  spacingXXS: '1rem',
  spacingXS: '1.5rem',
  spacingS: '3rem',
  spacingM: '6rem',
  spacingL: '9rem',
  accent: '#F1D300',
  white: '#FFFFFF',
  fontLight: 300,
  fontMedium: 500,
  fontSemiBold: 600,
  fontBold: 700,
  mainBorderRadius: '10px',
  bigBorderRadius: '20px',
  roundedBorderRadius: '25px',
  mainBoxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  bigBoxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  colors: {
    yellow: '#FDD835',
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
  background: '#1D191C',
  clearerBackground: '#2B272A',
  title: '#ffffff',
  text1: '#fefefe',
  text2: '#2F2F2F',
  text3: '#757575',
  text4: '#BDBDBD',
  text5: '#606060'
}
