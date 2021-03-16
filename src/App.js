import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import CampgroundsContextProvider from './contexts/CampgroundsContext';
import SwitchRoutes from './routing/SwitchRoutes';
import { ROUTES } from './routing/Routes';
import CommentsContextProvider from './contexts/CommentsContext';
import AuthenticationContextProvider from './contexts/AuthenticationContext';

function App() {
  return (
    <Router>
      <div className="App">
        <AuthenticationContextProvider>
          <CampgroundsContextProvider>
            <CommentsContextProvider>
              <SwitchRoutes routes={ROUTES}/> 
            </CommentsContextProvider>
          </CampgroundsContextProvider>
        </AuthenticationContextProvider>
      </div>
    </Router>
  );
}

export default App;
