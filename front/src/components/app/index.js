import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StudentRegistrationPage from '../../pages/student-registration-page';
import TeachersPage from '../../pages/teachers/teachers-page';
import LoginPage from '../../pages/login';
import UpdateProfile from '../../containers/modal-update-profile/index';
import GroupsPage from '../../pages/groups';
import SetPasswordPage from '../../pages/set-password';
import ForgotPasswordPage from '../../pages/forgot-password';
import TasksList from '../../pages/tasks-list';
import ChangePasswordButtons from '../change-password';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/student-registration/:token" component={StudentRegistrationPage} />
                    <Route path="/teachers" exact component={TeachersPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/dashboard" component={UpdateProfile} />
                    <Route path="/resetPassword/:token" component={SetPasswordPage} />
                    <Route path="/forgotPassword/" component={ForgotPasswordPage} />
                    <Route path="/groups" component={GroupsPage} />
                    <Route path="/tasks" component={TasksList} />
                    <Route path="/changePassword" component={ChangePasswordButtons} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
