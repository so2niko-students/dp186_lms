import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUserAction } from '../../common/redux/actions/authActions';
import { Redirect } from 'react-router-dom';
import { LoginForm } from './LoginForm';

class LoginPage extends Component {
  onHandleLogin = (data) => {
    this.props.dispatch(loginUserAction(data));
  }
  
  componentDidMount() {
    document.title = 'Login';
  }
  
  render() {
    return (
      <div>
        {this.props.isLogin ? <Redirect to='dashboard' /> : null }
        <LoginForm onHandleLogin={this.onHandleLogin} message={this.props.errorMessage} isLogin={this.props.isLogin} />
      </div>
    );
  }
}

const mapStateToProps = ({
  login : { errorMessage, isLogin }}
) => ({ errorMessage, isLogin });

export default connect(mapStateToProps)(LoginPage);
