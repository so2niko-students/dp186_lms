//HOW TO USE:
//
// this.state = { modalVisible: false };
//   
//   showModal = () => {
//     this.setState({
//       modalVisible: true,
//     });
//   };
//   handleCancel = () => {
//     this.setState({
//       modalVisible: false,
//     });
//   };  
//
// <Button type='primary' onClick={this.showModal}>Change password</Button>
// <ChangePassword visible={this.state.modalVisible} handleCancel={this.handleCancel} user="student" /> //(or user="teacher")


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changePasswordAction, changeSuccessPasswordAction } from '../../common/redux/auth/auth.action';
import { validatePassword } from '../../common/validators/form.validator';
import Spinner from '../../components/spinner';
import { ErrorText } from './style';
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

    componentDidUpdate() {
        const { isChangedPassword, visible, handleCancel, onHandleChangeState } = this.props;
        if (isChangedPassword && visible === true) {
            Spinner.success('Password has been changed');
            handleCancel();
            onHandleChangeState();
        }
    }

    render() {
        const { errorMessage, onHandleChangePassword, visible, handleCancel, user } = this.props;

        return (
            <div>
                <Modal
                    visible={visible}
                    onCancel={handleCancel}
                    okButtonProps={{ style: { display: 'none' } }}
                    cancelButtonProps={{ style: { display: 'none' } }}
                >
                    <Row justify="center">
                        <Col span={24}>
                            <Title level={2} align="center"> Change password </Title>
                            <Form {...layout} onFinish={onHandleChangePassword}>
                                <Form.Item name="oldPassword" align="center" rules={[{ required: true, message: 'Please input your old password!' }, { validator: validatePassword }]} >
                                    <Input.Password placeholder="Old password" />
                                </Form.Item>
                                <Form.Item name="newPassword" align="center" rules={[{ required: true, message: 'Please input your new password!' }, { validator: validatePassword }]} >
                                    <Input.Password placeholder="New password" />
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
                                    <Input.Password placeholder="Confirm new password" />
                                </Form.Item>
                                <Form.Item name={user} style={{ display: 'none' }}>
                                    <Input type="text" />
                                </Form.Item>
                                {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
                                <Form.Item align="center" {...tailLayout}>
                                    <Button type="primary" htmlType="submit"> Change password </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                </Modal></div>
        )
    }
}

const mapStateToProps = ({ changePassword: { errorMessage, isChangedPassword } }) => ({
    errorMessage,
    isChangedPassword
});

const mapDispatchToProps = (dispatch) => {
    return {
        onHandleChangePassword: (data) => {
            return dispatch(changePasswordAction(data))
        },
        onHandleChangeState: () => {
            return dispatch(changeSuccessPasswordAction('is success'))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);