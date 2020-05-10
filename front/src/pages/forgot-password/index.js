import React, { Component }                from 'react';
import { StyledCol, SetButton, ErrorText, SuccessText } from './style';
import { Form, Input, Typography, Row }    from 'antd';
import { connect }                         from 'react-redux';
import { forgotPasswordAction }            from '../../common/redux/forgot-password/forgot.password.action';
import { Link }                            from 'react-router-dom';
import { validateEmail }                   from '../../common/validators/form.validator';

const {Title} = Typography;
const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};
const tailLayout = {
    wrapperCol: {offset: 7, span: 16,},
};

class ForgotPasswordPage extends Component {
    constructor(props) {
        super(props);
        this.handleRequestPassword = this.handleRequestPassword.bind(this);
        this.renderPasswordForgotForm = this.renderPasswordForgotForm.bind(this);
    }

    handleRequestPassword(data) {
        data.host = `http://${window.location.hostname}:${window.location.port}`;
        this.props.forgotPasswordAction(data);
    }


    renderPasswordForgotForm(message, isMailSent) {
        return (
            <Row>
                <StyledCol span={8} offset={8}>
                    <Title level={2} align="center">Forgot password</Title>
                    <Form {...layout} name="basic" onFinish={this.handleRequestPassword}>
                        <Form.Item
                            align="center"
                            name="email"
                            hasFeedback
                            rules={[{required: true, message: 'Please, input email in correct format'},
                                {validator: validateEmail},]}
                        >
                            <Input placeholder='Your email'/>
                        </Form.Item>

                        {isMailSent ? (
                            <SuccessText>
                                {message}
                            </SuccessText>
                        ) : (
                            <ErrorText>
                                {message}
                            </ErrorText>
                        )}

                        <Form.Item {...tailLayout} >
                            <SetButton type="primary" htmlType="submit">
                                Get new password
                            </SetButton>
                        </Form.Item>

                        <Form.Item {...tailLayout} >
                            <Link to="/login">
                                <SetButton type="default">
                                    Login
                                </SetButton>
                            </Link>
                        </Form.Item>
                    </Form>
                </StyledCol>
            </Row>);
    }

    render() {
        const {message, isMailSent} = this.props;

        return (
            <div>
                {this.renderPasswordForgotForm(message, isMailSent)}
            </div>
        );
    }
}

const mapStateToProps = ({forgotPassword: {isMailSent, message}}) => ({message, isMailSent});

const mapDispatchToProps = { forgotPasswordAction };

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordPage);
