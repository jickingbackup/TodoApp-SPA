import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import PageNotFound from "./pages/PageNotFound";
import { Container } from "react-bootstrap";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/todos" component={Todos} />
          <Route exact path="/todos/edit/:id" component={Todos} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
