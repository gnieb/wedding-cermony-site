import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './pages/Home';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            {/* <Us /> */}
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
