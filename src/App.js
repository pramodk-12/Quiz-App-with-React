import React, { useContext } from "react";
import './App.css'; 
import Welcome from "./pages/Welcome";
import {Switch,Route,Redirect} from "react-router-dom";
import Quiz from "./pages/quiz";
import {ContextProvider} from "./components/ContextProvider";
import Loading from "./components/Loading"
import Scorecard from "./pages/Scorecard";

function App() {
  const context = useContext(ContextProvider)

  return (
    <div className="background" >
      <div className="my-container" >
        {context.loading ? <Loading /> : 
      <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Welcome />
          </Route>
          <Route path="/quiz">
                {context.authorized === true ? <Quiz /> : <Redirect to="/home" />}
          </Route>
          <Route path="/scorecard">
                {context.authorized === true ? <Scorecard /> : <Redirect to="/home" />}
          </Route>
          
      </Switch> }
      </div>
      
    </div>
    
  );
}

export default App;
