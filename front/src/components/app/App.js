import React, { Component } from "react";
import ExampleForRedux from "../exampleForRedux/ExampleForRedux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "../login";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={LoginPage} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
