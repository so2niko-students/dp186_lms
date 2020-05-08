import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StudentRegistrationPage from '../../pages/student-registration-page';
import LoginPage from '../../pages/login';
import TasksList from '../../pages/tasks-list';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/student-registration/:token" component={StudentRegistrationPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/tasks" component={TasksList} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;