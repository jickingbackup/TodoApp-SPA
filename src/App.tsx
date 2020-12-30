import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <div>Header</div>
      <div>
        <h1>Container</h1>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/todos" component={Todos} />
            <Route exact path="/todos/edit/:id" component={Todos} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
