import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movie from "./components/Movie";
import TvProgram from "./components/TvProgram";
import Search from "./components/Search";
import Home from "./components/Home";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

function App() {
  return (
    <Wrapper>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/movies">
            <Movie />
          </Route>
          <Route exact path="/tv">
            <TvProgram />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;
