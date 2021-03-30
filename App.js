import React from "react";
import Home from "./Home";
import Inspect from "./Inspect";
import Nav from "./Nav";
import AddProfile from "./AddProfile";
import Login from "./Login";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Protected from "./Protected";
import Staff from "./Staff";
import "./App.css";

function App() {
    return(
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/person/:id" component={Inspect} />
                    <Route path="/new" exact component={AddProfile}/>
                    <Route exact path="/login" render={props => <Login {...props} />} />
                    <Protected path="/staff" exact component={Staff} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
