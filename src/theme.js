import { createTheme } from '@mui/material/styles';

/**
 * 무채색(검정/흰색/회색) 기반의 모던한 테마
 */
const theme = createTheme({
  palette: {
    primary: {
      main: '#111111',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#757575',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#111111',
      secondary: '#737373',
    },
    divider: '#e5e5e5',
  },
  typography: {
    fontFamily: '"Roboto", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
  components: {
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          border: '1px solid #e5e5e5',
        },
      },
    },
  },
});

export default theme;
