import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Admin from "./pages/Admin";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path='/admin' component={Admin} />
            </Switch>
        </Router>
    );
}

export default App;
