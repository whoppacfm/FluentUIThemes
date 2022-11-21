
//Theme Designer: https://fluentuipr.z22.web.core.windows.net/heads/master/theming-designer/index.html

import { loadTheme, createTheme, Theme } from '@fluentui/react';

//Load Theme
const appTheme: Theme = createTheme({
  palette: {
    themePrimary: 'grey',
    themeSecondary: 'green'
  }
});

//Load Theme with global scope
loadTheme(appTheme);

//Load scheme in local scope in jsx:
//<ThemeProvider theme={XYTheme}>
//  <XYControl />
//</ThemeProvider>
