// theme.js
import { createTheme } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
  palette: {
    gradients: {
      primary: { main: '#FF5722', state: '#FFC107' }, // Example gradient colors
      secondary: { main: '#3F51B5', state: '#2196F3' },
      // Add other gradients as needed
    },
    grey: {
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
    white: { main: '#ffffff' },
    // Add other colors if needed
  },
  functions: {
    // Define the linearGradient function
    linearGradient: (color1, color2) => `linear-gradient(${color1}, ${color2})`,
  },
  borders: {
    borderRadius: {
      xs: '4px',
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
      xxl: '32px',
      section: '48px',
    },
  },
  boxShadows: {
    xs: '0px 1px 3px rgba(0, 0, 0, 0.2)',
    sm: '0px 3px 6px rgba(0, 0, 0, 0.2)',
    md: '0px 6px 12px rgba(0, 0, 0, 0.2)',
    lg: '0px 10px 20px rgba(0, 0, 0, 0.2)',
    xl: '0px 15px 30px rgba(0, 0, 0, 0.2)',
    xxl: '0px 20px 40px rgba(0, 0, 0, 0.2)',
    inset: 'inset 0px 2px 4px rgba(0, 0, 0, 0.1)',
    colored: {
      primary: '0px 4px 6px rgba(255, 87, 34, 0.3)',
      // Define other colored shadows as needed
    },
  },
});

export default theme;
