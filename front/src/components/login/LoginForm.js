import React, { Component } from 'react';
import { LoginButton, StyledCol, Container, ForgotPassword} from './styledLoginForm';
import { Form, Input, Col, Typography } from 'antd';
import  'antd/dist/antd.css';

const { Title } = Typography;
const layout = { 
    labelCol: { span: 8, },
    wrapperCol: { span: 16, },
};
const tailLayout = { 
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

export class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.onHandleLogin = props.onHandleLogin;
    }
    
    render() {

        return (
            <Container>
                <StyledCol span={8} offset={8}>
                    <Title level={2} align="center">Login</Title>

                    <Form {...layout} name="basic" onFinish={this.onHandleLogin}>
                    <Form.Item align="center" name="email"  rules={[{ required: true, message: 'Please input your email!', type: 'email' }]} >
                        <Input placeholder="Email" />
                    </Form.Item>

                    <Form.Item align="center" name="password" rules={[ { required: true, message: 'Please input your password!', }, ]} >
                        <Input.Password placeholder="Password" />
                    </Form.Item>

                    <Form.Item align="center" {...tailLayout}>
                        <LoginButton type="primary" htmlType="submit"> Login </LoginButton>
                    </Form.Item>

                    <Col align="center"><ForgotPassword to="/recoveryPass">Forgot password?</ForgotPassword></Col>
                    </Form>
                </StyledCol>
            </Container>
        )
    }

}

