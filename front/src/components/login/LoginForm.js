import React from 'react';
import { LoginButton, StyledCol, ForgotPassword, ErrorText} from './styledLoginForm';
import { Form, Input, Col, Typography, Row } from 'antd';
import 'antd/dist/antd.css';

const { Title } = Typography;
const layout = { 
    labelCol: { span: 8, },
    wrapperCol: { span: 16, },
};

export function LoginForm(props) {
    return (
        <Row>
            <StyledCol span={8} offset={8}>
                <Title level={2} align="center">Login</Title>

                <Form {...layout} name="basic" onFinish={props.onHandleLogin}>
                <Form.Item align="center" name="email"  rules={[{ required: true, message: 'Please input your email!', type: 'email' }]} >
                    <Input placeholder="Email" />
                </Form.Item>

                <Form.Item align="center" name="password" rules={[ { required: true, message: 'Please input your password!', }, ]} >
                    <Input.Password placeholder="Password" />
                </Form.Item>

                { props.isLogin ? null : <ErrorText>{props.message}</ErrorText> }

                <Form.Item align="center">
                    <LoginButton type="primary" htmlType="submit"> Login </LoginButton>
                </Form.Item>

                <Col align="center"><ForgotPassword to="/recoveryPass">Forgot password?</ForgotPassword></Col>
                </Form>
            </StyledCol>
        </Row>
    )
}

