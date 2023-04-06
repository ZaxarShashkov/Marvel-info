import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import MainPage from "../pages/MainPage";
import ComicsPage from "../pages/ComicsPage";

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Switch>
            <Route exact path="/Marvel-info">
              <MainPage />
            </Route>
            <Route exact path="/Marvel-info/comics">
              <ComicsPage />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
