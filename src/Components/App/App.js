import React from 'react';
import '../../App.css';
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import Header from '../Header';
import Settings from '../Settings';

function App({settingsSaved}) {
  return (
    <div className="App">
      <Router>
      <Header />
      {/* This is checking if the settings have been saved. If they haven't the settings component displays. If true
      the app contines. */}
      {!settingsSaved ? 
        <Settings /> 
      :
        <Switch>
          <Route exact path = "/">
            
          </Route>
        </Switch>
      }
      </Router>
    </div>
  );
}

export default App;
