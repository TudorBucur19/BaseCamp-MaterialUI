import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import CampgroundsContextProvider from './contexts/CampgroundsContext';
import SwitchRoutes from './routing/SwitchRoutes';
import { ROUTES } from './routing/Routes';
import CommentsContextProvider from './contexts/CommentsContext';
import AuthenticationContextProvider from './contexts/AuthenticationContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { customTheme } from './utils/customThme';

function App() {
  const theme = createTheme(customTheme);

  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <CampgroundsContextProvider>
            <CommentsContextProvider>
              <SwitchRoutes routes={ROUTES}/> 
            </CommentsContextProvider>
          </CampgroundsContextProvider>
        </AuthenticationContextProvider>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
