
//Theme Designer: https://fluentuipr.z22.web.core.windows.net/heads/master/theming-designer/index.html

import { loadTheme, createTheme, Theme } from '@fluentui/react';

//Load Theme
const appTheme: Theme = createTheme({
  palette: {
    themePrimary: 'grey',
    themeSecondary: 'green'
  }
});

const myTheme_buttonStyles: IButtonStyles = {
  root: {
    backgroundColor: 'yellow'
  }
};

const myTheme = createTheme({
  defaultFontStyle: { fontFamily: 'Monaco, Menlo, Consolas', fontWeight: 'regular' },
  fonts: {
    small: {
      fontSize: '11px'
    },
    medium: {
      fontSize: '13px'
    },
    large: {
      fontSize: '20px',
      fontWeight: 'semibold'
    },
    xLarge: {
      fontSize: '22px',
      fontWeight: 'semibold'
    }
  },  
  components: { PrimaryButton: { styles: myTheme_buttonStyles } },
  palette: {
    themePrimary: '#15b053',
    themeLighterAlt: '#010703',
    themeLighter: '#031c0d',
    themeLight: '#063519',
    themeTertiary: '#0d6a32',
    themeSecondary: '#139b49',
    themeDarkAlt: '#26b860',
    themeDark: '#41c375',
    themeDarker: '#6bd394',
    neutralLighterAlt: '#0d0c0c',
    neutralLighter: '#171616',
    neutralLight: '#272424',
    neutralQuaternaryAlt: '#312e2e',
    neutralQuaternary: '#393535',
    neutralTertiaryAlt: '#5b5656',
    neutralTertiary: '#b0e19e',
    neutralSecondary: '#6dc34e',
    neutralSecondaryAlt: '#6dc34e',
    neutralPrimaryAlt: '#3ba714',
    neutralPrimary: '#299c00',
    neutralDark: '#207600',
    black: '#175700',
    white: '#030202',
  }});

//Load Theme with global scope
loadTheme(myTheme);

//Load scheme in local scope in jsx:
//<ThemeProvider theme={XYTheme}>
//  <XYControl />
//</ThemeProvider>
