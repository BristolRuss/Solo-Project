import React from 'react';
import '../../App.css';
import { HashRouter as Router } from "react-router-dom";
import Header from '../Header';
import Settings from '../Settings';
import Players from '../Players';
import MatchUps from '../MatchUps';

function App({settingsSaved, matchesUnderway}) {
  return (
    <div className="App">
      <div className="Wrapper">
        <Router>
          <Header />
          {/* This is checking if the settings have been saved. If they haven't the settings component displays. If true
          the app contines. */}
          {!settingsSaved ? 
            <Settings /> 
          :
          // if settings have been saved then this checks if the pairings have been confirmed
            !matchesUnderway ?
              <Players />
              :
              <MatchUps />
          }
        </Router>
      </div>
    </div>
  );
}

export default App;
