import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUserAction } from '../../common/redux/actions/authActions';
import { Redirect } from 'react-router-dom';
import { LoginForm } from './LoginForm';

class LoginPage extends Component {
  onHandleLogin = (data) => {
    // console.log(data)
    // console.log('LOGIN PAGE DISPATCH DATA');
    
    this.props.dispatch(loginUserAction(data));
  }
  
  componentDidMount() {
    document.title = 'Login';
  }
  
  render() {
    let isSuccess, message;
    console.log(this.props.response.login)
    if (!this.props.response.login.hasOwnProperty('response')) {
      isSuccess = false;
      message = 'You have not logged in';
    } else {
      isSuccess = true;
    }
    return (
      <div>
        {!isSuccess ? <div>{message}</div> : <Redirect to='dashboard' />}
        <LoginForm onHandleLogin={this.onHandleLogin} />
      </div>
    );
  }
}

const mapStateToProps = (response) => ({response});

export default connect(mapStateToProps)(LoginPage);
