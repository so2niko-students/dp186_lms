import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StudentRegistrationPage from '../../pages/student-registration-page';
import TeachersPage from '../../pages/teachers/teachers-page';
import LoginPage from '../../pages/login';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/student-registration/:token" component={StudentRegistrationPage} />
                    <Route path="/teachers" exact component={TeachersPage} />
                    <Route path="/login" component={LoginPage} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;