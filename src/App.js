import React from "react";
import Editor from "./components/Editor";
import Calendar from "./components/Calendar";
import "./stylesheets/App.scss";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Calendar />;
          }}
        />
        <Route path="/editor" component={Editor} />
      </Switch>
    </div>
  );
}

export default App;