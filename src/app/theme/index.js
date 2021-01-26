import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
      light: '#222222'
    },
    secondary: {
      main: '#E50914'
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif'
  }
});

export default theme;
