import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import AppRouter from './AppRouter';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6B6B',
      dark: '#FF4F4F',
    },
    secondary: {
      main: '#2F6B48',
      dark: '#1F4A31',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;