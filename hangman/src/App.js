import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Background from "./components/Background";
import Hangman from "./components/Hangman";

export default class App extends React.Component {
  render() {
    return (
      <div className="flower">
        <div className="glass">
          <Router>
            <Switch>
              <Route exact path="/play" component={Hangman} />
              <Background />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}
