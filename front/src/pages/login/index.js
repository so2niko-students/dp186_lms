import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUserAction } from '../../common/redux/auth/auth.action';
import { LoginButton, StyledCol, ForgotPassword, ErrorText } from './style';
import { Form, Input, Col, Typography, Row, Button } from 'antd';
import 'antd/dist/antd.css';
import {
  validateEmail,
  validatePassword
} from '../../common/validators/form.validator';

const { Title } = Typography;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.loginFormTemplate = this.loginFormTemplate.bind(this);
  }

  loginFormTemplate(errorMessage, isLoggedIn) {
    return (
      <Row>
        <StyledCol span={8} offset={8}>
          <Title level={2} align='center'>
            Login
            </Title>

          <Form {...layout} name='basic' onFinish={this.props.onHandleLogin}>
            <Form.Item
              align='center'
              name='email'
              rules={[
                { required: true, message: 'Please input your email!' },
                { validator: validateEmail }
              ]}>
              <Input placeholder='Email' />
            </Form.Item>

            <Form.Item
              align='center'
              name='password'
              rules={[
                { required: true, message: 'Please input your password!' },
                { validator: validatePassword }
              ]}>
              <Input.Password placeholder='Password' />
            </Form.Item>

            {isLoggedIn ? null : (
              <ErrorText>
                {errorMessage}
              </ErrorText>
            )}

            <Form.Item align='center'>
              <LoginButton type='primary' htmlType='submit'>
                {' '}
                  Login{' '}
              </LoginButton>
            </Form.Item>

            <Col align='center'>
              <ForgotPassword to='/recoveryPass'>
                Forgot password?
                </ForgotPassword>
            </Col>
          </Form>
        </StyledCol>
      </Row>
    )
  }

  render() {
    const { errorMessage, isLoggedIn } = this.props;
    return (
      <div>
        {isLoggedIn ? <Redirect to='dashboard' /> : null}
        {this.loginFormTemplate(errorMessage, isLoggedIn)}
      </div>
    );
  }
}

const mapStateToProps = ({ login: { errorMessage, isLoggedIn } }) => ({
  errorMessage,
  isLoggedIn
});

const mapDispatchToProps = (dispatch) => {
  return {
    onHandleLogin: (data) => dispatch(loginUserAction(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
