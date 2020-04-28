import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUserAction } from '../../common/redux/actions/authActions';
import { Redirect } from 'react-router-dom';
import { LoginForm } from './LoginForm';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSuccess: '',
    }
    this.message = ''
  }
  onHandleLogin = (data) => {
    this.props.dispatch(loginUserAction(data));
  }
  
  componentDidMount() {
    document.title = 'Login';
    this.message = !this.state.isSuccess ? 'Wrong email or password' : null;
  }
  
  render() {
    if( this.props.response.login.response){
      this.setState({
        isSuccess : this.props.response.login.response.token
      })
    }
    
    return (
      <div>
        {this.state.isSuccess ? <Redirect to='dashboard' /> : null }
        <LoginForm onHandleLogin={this.onHandleLogin} message={this.message} isSuccess={this.state.isSuccess} />
      </div>
    );
  }
}

const mapStateToProps = (response) => ({response});

export default connect(mapStateToProps)(LoginPage);
