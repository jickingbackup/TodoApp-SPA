import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainContainer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/todos" component={Todos} />
          <Route exact path="/todos/edit/:id" component={Todos} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;
