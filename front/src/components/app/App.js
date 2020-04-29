import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StudentRegistrationPage from '../student-registration/student-registration-page';
import LoginPage from "../login";

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
