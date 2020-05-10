import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changePasswordAction, changeSuccessPasswordAction } from '../../common/redux/auth/auth.action';
import { validatePassword } from '../../common/validators/form.validator';
import Spinner from '../../components/spinner';
import { ErrorText, MentorName } from './style';
import { Modal, Col, Input, Button, Row, Form, Typography } from 'antd';
import 'antd/dist/antd.css';
const { Title } = Typography;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: {
        offset: 9,
        span: 16,
    },
};

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.onHandleChangePassword = this.onHandleChangePassword.bind(this);
        this.onHandleChangeState = this.onHandleChangeState.bind(this);
    }

    componentDidUpdate() {
        const { isChangedPassword, visible, handleCancel } = this.props;
        if (isChangedPassword && visible === true) {
            Spinner.success('Password has been changed');
            handleCancel();
            this.onHandleChangeState();
        }
    }
    onHandleChangePassword(data) {
        this.props.changePasswordAction(data);
    };

    onHandleChangeState() {
        this.props.changeSuccessPasswordAction('is success');
    }

    render() {
        const { errorMessage, visible, handleCancel, user } = this.props;

        return (
            <Modal
                visible={visible}
                onCancel={handleCancel}
                okButtonProps={{ style: { display: 'none' } }}
                cancelButtonProps={{ style: { display: 'none' } }}
            >
                <Row justify="center">
                    <Col span={24}>
                        <Title level={2} align="center"> Change password </Title>
                        <Form {...layout} onFinish={this.onHandleChangePassword} initialValues={{ teacherId: this.props.teacherId, user: this.props.user }} >
                            {user === 'admin' ? <MentorName align="center"> {this.props.mentorName} </MentorName> : null}
                            {user === 'admin' ? null : <Form.Item name="oldPassword" align="center" rules={[{ required: true, message: 'Please input your old password!' }, { validator: validatePassword }]} >
                                <Input.Password placeholder="Old password" />
                            </Form.Item>}
                            <Form.Item name="newPassword" align="center" rules={[{ required: true, message: 'Please input your new password!' }, { validator: validatePassword }]} >
                                <Input.Password placeholder={user === 'admin' ? 'Password' : 'New password'} />
                            </Form.Item>
                            <Form.Item name="confirmNewPassword" dependencies={['newPassword']} align="center"
                                rules={[
                                    { required: true, message: 'Please input your new password again!' },
                                    ({ getFieldValue }) => ({
                                        validator(rule, value) {
                                            if (!value || getFieldValue('newPassword') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject('The two passwords that you entered do not match!');
                                        },
                                    }),
                                    { validator: validatePassword }]} >
                                <Input.Password placeholder={user === 'admin' ? 'Confirm password' : 'Confirm new password'} />
                            </Form.Item>
                            <Form.Item name="user" style={{ display: 'none' }}>
                                <Input type="text" />
                            </Form.Item>
                            {this.props.teacherId ?
                                <Form.Item name={['teacherId', this.props.teacherId]} style={{ display: 'none' }}>
                                    <Input type="text" />
                                </Form.Item>
                                : null}
                            {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
                            <Form.Item align="center" {...tailLayout}>
                                <Button type="primary" htmlType="submit"> {user === 'admin' ? 'Update password' : 'Change password'} </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Modal>
        )
    }
}

const mapStateToProps = ({ changePassword: { errorMessage, isChangedPassword } }) => ({
    errorMessage,
    isChangedPassword
});

const mapDispatchToProps = {
    changePasswordAction,
    changeSuccessPasswordAction
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);