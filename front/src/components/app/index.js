import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StudentRegistrationPage from '../../pages/student-registration-page';
import LoginPage from '../../pages/login';
import UpdateProfile from '../../containers/modal-update-profile/index';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/student-registration/:token" component={StudentRegistrationPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/update-profile" component={UpdateProfile} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;