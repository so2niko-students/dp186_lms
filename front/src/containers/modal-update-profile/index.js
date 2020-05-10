import React, { Component } from 'react';
import { connect } from "react-redux";
import { Modal, Col, Row, Form, Typography, Button } from 'antd';
import { validateEng, validateUkr, validatePhoneNumber, } from '../../common/validators/form.validator';
import { StyledInput, StyledButton, StyledBtnModal, ErrorText } from './style';
import { updateUserProfileAction } from '../../common/redux/update-profile/update.profile.action';

const { Title } = Typography;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

class UpdateProfile extends Component {

    constructor(props) {
        super(props);
        this.handleUpdateProfile = this.handleUpdateProfile.bind(this);
    }

    state = {
        visible: false,
        user: JSON.parse(localStorage.getItem('user'))
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    handleUpdateProfile (data) {
        this.props.updateUserProfileAction(data);
        this.handleCancel();
        console.log(data);
        
    
    }

    render() {
        const { errorMessage } = this.props;
        const { user } = this.state;
console.log(user)
        return (

            <div>
                <StyledBtnModal type="primary" onClick={this.showModal}>
                    Update profile
                </StyledBtnModal>

                <Modal
                    centered
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    okButtonProps={{ style: { display: 'none' } }}
                    cancelButtonProps={{ style: { display: 'none' } }}
                >


                    <Row justify="center">
                        <Col span={24}>
                            <Title level={2} align="center"> Edit profile </Title>
                            <Form {...layout} onFinish={this.handleUpdateProfile}>
                                <Form.Item
                                    name="firstNameEng"
                                    align="center"
                                    rules={[
                                        { required: true, message: 'Please input your name in English!' },
                                        { validator: validateEng },
                                    ]}
                                >
                                    <StyledInput placeholder="Name in English" />
                                </Form.Item>

                                <Form.Item
                                    name="lastNameEng"
                                    align="center"
                                    rules={[
                                        { required: true, message: 'Please input your surname in English!' },
                                        { validator: validateEng },
                                    ]}
                                >
                                    <StyledInput placeholder="Surname in English" />
                                </Form.Item>

                                {user.hasOwnProperty('isAdmin') ? null :
                                    <Form.Item
                                        name="firstNameUkr"
                                        align="center"
                                        rules={[
                                            { required: true, message: 'Please input name in Ukrainian!' },
                                            { validator: validateUkr },
                                        ]}
                                    >
                                        <StyledInput placeholder="Name in Ukrainian" />
                                    </Form.Item>
                                }

                                {user.hasOwnProperty('isAdmin') ? null :
                                    <Form.Item
                                        name="lastNameUkr"
                                        align="center"
                                        rules={[
                                            { required: true, message: 'Please input your surname in Ukrainian!' },
                                            { validator: validateUkr },
                                        ]}
                                    >
                                        <StyledInput placeholder="Surname in Ukrainian" />
                                    </Form.Item>
                                }

                                <Form.Item
                                    name="email"
                                    align="center"
                                    rules={[
                                        { required: true, message: 'Please input your email!' },
                                        { type: 'email', message: 'The input is not valid E-mail!' },
                                    ]}
                                >
                                    <StyledInput placeholder="Email" />
                                </Form.Item>

                                {user.hasOwnProperty('isAdmin') ? null :
                                    <Form.Item
                                        name="phoneNumber"
                                        align="center"
                                        rules={[
                                            { required: true, message: 'Please input your phone number!' },
                                            { validator: validatePhoneNumber },
                                        ]}
                                    >
                                        <StyledInput placeholder="Phone number" />
                                    </Form.Item>
                                }

                                {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}

                                <Form.Item align="center">
                                    <StyledButton type="primary" htmlType="submit">
                                        Update profile
                                </StyledButton>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = ({ updateUserProfile: { isUpdatedProfile, errorMessage } }) => ({ isUpdatedProfile, errorMessage });

const mapDispatchToProps = { updateUserProfileAction };

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);