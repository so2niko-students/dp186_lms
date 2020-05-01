import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './common/redux/store';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StudentRegistrationPage from './pages/student-registration-page';

class App extends Component {
    render() {
        return (
          <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/student-registration/:token" component={StudentRegistrationPage} />
                </Switch>
            </BrowserRouter>
          </Provider>
        )
    }
}

render(<App />, document.getElementById('root'));
