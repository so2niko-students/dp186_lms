import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StudentRegistrationPage from '../../pages/student-registration-page';
import TeachersPage from '../../pages/teachers/teachers-page';
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/student-registration/:token" component={StudentRegistrationPage} />
                    <Route path="/teachers" component={TeachersPage} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;