import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from '../../pages/login';
import GroupsPage from '../../pages/groups';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/groups" component={GroupsPage} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;