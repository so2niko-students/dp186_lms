import React, { Component } from "react";
import ExampleForRedux from "../exampleForRedux/ExampleForRedux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "../login/LoginPage";
import {StudentRegistrationPage} from '../student-registration-page';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/student-registration/:token" component={StudentRegistrationPage} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
