import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import LandingPage from './components/landingPage/LandingPage';
import SwitchRoutes from './routing/SwitchRoutes';
import { ROUTES } from './routing/Routes';

function App() {
  return (
    <Router>
      <div className="App">
        <SwitchRoutes routes={ROUTES}/>
      </div>
    </Router>
  );
}

export default App;
