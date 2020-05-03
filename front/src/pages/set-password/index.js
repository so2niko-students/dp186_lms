import React, { Component } from 'react';
import { StyledCol, SetButton, ErrorText } from './style';
import { Form, Input, Typography, Row } from 'antd';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setPasswordAction } from '../../common/redux/set-password/set.password.action';

const { Title } = Typography;
const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
};
const tailLayout = {
	wrapperCol: { offset: 7, span: 16, },
};

export class SetPasswordPage extends Component {
    constructor(props) {
        super(props);
        this.renderSetPasswordForm = this.renderSetPasswordForm.bind(this);
    }
    
    renderSetPasswordForm(errorMessage, isSetPassword) {
        return (
            <Row>
                <StyledCol span={8} offset={8}>
                <Title level={2} align="center">Set new password</Title>
                    <Form {...layout} name="basic" onFinish={this.props.onHandleSetPassword}>
                        <Form.Item
                            align="center"
                            name="password"
                            hasFeedback
                            rules={[{ required: true, message: 'Please, input your new password!' }, 
                            {
                                validator: (_, value) =>
                                  value.length >= 6
                                    ? Promise.resolve()
                                    : Promise.reject('Password length should be 6 or more symbols'),
                            },]}
                        >
                            <Input.Password placeholder='New password' />
                        </Form.Item>
    
                        <Form.Item
                            align="center"
                            name="confirm password"
                            hasFeedback
                            dependencies={['password']}
                            rules={[{ required: true, message: 'Please, confirm your new password!' }, 
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                  if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                  }
                                  return Promise.reject('The two passwords that you entered do not match!');
                                },
                              }),]}
                        >
                            <Input.Password placeholder='Confirm new password' />
                        </Form.Item>

                        {isSetPassword ? null : (
                            <ErrorText>
                                {errorMessage}
                            </ErrorText>
                        )}

                        <Form.Item {...tailLayout} >
                            <SetButton type="primary" htmlType="submit">
                                Change password
                            </SetButton>
                        </Form.Item>

                        <Form.Item {...tailLayout} >
                            <SetButton type="default" htmlType="submit" to='/login'>
                                Login
                            </SetButton>
                        </Form.Item>
                    </Form>
                </StyledCol>
            </Row>)
    }

    render() {
        const { errorMessage, isSetPassword } = this.props;
        return (
            <div>
                {isSetPassword? <Redirect to='/dashboard'/>: null}
                {this.renderSetPasswordForm(errorMessage, isSetPassword)}
            </div>
        )
    }
}

const mapStateToProps = ({setPassword: {isSetPassword}}) => ({isSetPassword});

const mapDispatchToProps = (dispatch) => {
    return {
        onHandleSetPassword: (data) => dispatch(setPasswordAction(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SetPasswordPage);