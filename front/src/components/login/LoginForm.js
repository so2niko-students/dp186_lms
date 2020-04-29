import React, { Component } from 'react';
import { LoginButton, StyledCol, ForgotPassword, ErrorText} from './styledLoginForm';
import { Form, Input, Col, Typography, Row } from 'antd';
import 'antd/dist/antd.css';

const { Title } = Typography;
const layout = { 
    labelCol: { span: 8, },
    wrapperCol: { span: 16, },
};

export class LoginForm extends Component {

    async validatePassword(_, value) {
        const passwordRegex = /[a-zA-Z\d]{6,}$/;
    
        if (passwordRegex.test(value)) {
          return Promise.resolve();
        } else {
          return Promise.reject('Password must be longer than 6 symbols');
        }
    }

    async validateEmail(_, value) {
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
        if (emailRegex.test(value)) {
          return Promise.resolve();
        } else {
          return Promise.reject('Email format must be like example@gmail.com');
        }
    }

        
    render() {
        return (
            <Row>
                <StyledCol span={8} offset={8}>
                    <Title level={2} align="center">Login</Title>

                    <Form {...layout} name="basic" onFinish={this.props.onHandleLogin}>
                    <Form.Item align="center" name="email" rules={[{ required: true, message: 'Please input your email!', }, { validator: this.validateEmail },]} >
                        <Input placeholder="Email" />
                    </Form.Item>

                    <Form.Item align="center" name="password" rules={[ { required: true, message: 'Please input your password!', }, { validator: this.validatePassword }, ]} >
                        <Input.Password placeholder="Password" />
                    </Form.Item>

                    { this.props.isLogin ? null : <ErrorText>{this.props.message}</ErrorText> }

                    <Form.Item align="center">
                        <LoginButton type="primary" htmlType="submit" validatePassword={this.validatePassword}> Login </LoginButton>
                    </Form.Item>

                    <Col align="center"><ForgotPassword to="/recoveryPass">Forgot password?</ForgotPassword></Col>
                    </Form>
                </StyledCol>
            </Row>
        )
    }
}

