import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StudentRegistrationPage from '../../pages/student-registration-page';
import TeachersPage from '../../pages/teachers/teachers-page';
import LoginPage from '../../pages/login';
import GroupsPage from '../../pages/groups';
import SetPasswordPage from '../../pages/set-password';
import ForgotPasswordPage from '../../pages/forgot-password';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/student-registration/:token" component={StudentRegistrationPage} />
                    <Route path="/teachers" exact component={TeachersPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/resetPassword/:token" component={SetPasswordPage} />
                    <Route path="/forgotPassword/" component={ForgotPasswordPage} />
                    <Route path="/groups" component={GroupsPage} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
