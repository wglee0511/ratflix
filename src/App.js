import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Movie from "./components/Movie";
import TvProgram from "./components/TvProgram";
import Search from "./components/Search";


function App() {
  return (<>
    <Router>
     <Navbar />
     <Switch>
      <Route exact path="/"><Movie /></Route>
      <Route exact path="/tv"><TvProgram /></Route>
      <Route exact path="/search"><Search /></Route>
     </Switch>
    </Router>
    
  </>)
}

export default App;
