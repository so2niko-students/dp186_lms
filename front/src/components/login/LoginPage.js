import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUserAction } from '../../common/redux/actions/authActions';
import { Redirect } from 'react-router-dom';
import { LoginForm } from './LoginForm';

let isSuccess = false, message;

class LoginPage extends Component {
  onHandleLogin = (data) => {
    this.props.dispatch(loginUserAction(data));
  }
  
  componentDidMount() {
    document.title = 'Login';
    message = !isSuccess ? 'Wrong email or password' : null;
  }
  
  render() {
    if( this.props.response.login.response){
      isSuccess = this.props.response.login.response.token;
    }
    
    return (
      <div>
        {isSuccess ? <Redirect to='dashboard' /> : null }
        <LoginForm onHandleLogin={this.onHandleLogin} message={message} isSuccess={isSuccess} />
      </div>
    );
  }
}

const mapStateToProps = (response) => ({response});

export default connect(mapStateToProps)(LoginPage);
