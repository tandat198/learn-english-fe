import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Admin from "./pages/Admin";

import "./App.css";

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
