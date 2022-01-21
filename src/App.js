import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import CampgroundsContextProvider from 'contexts/CampgroundsContext';
import SwitchRoutes from 'routing/SwitchRoutes';
import { ROUTES } from 'routing/Routes';
import AuthenticationContextProvider from 'contexts/AuthenticationContext';
import { customTheme } from 'utils/customThme';
import './App.scss';

function App() {
  const theme = createTheme(customTheme);

  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <CampgroundsContextProvider>
              <SwitchRoutes routes={ROUTES}/> 
          </CampgroundsContextProvider>
        </AuthenticationContextProvider>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
