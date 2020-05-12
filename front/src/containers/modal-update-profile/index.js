import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { Modal, Col, Row, Form, Typography } from 'antd';
import { validateEng, validateUkr, validatePhoneNumber, } from '../../common/validators/form.validator';
import { StyledInput, StyledButton, StyledBtnModal } from './style';
import { updateUserProfileAction, showModalUpdateProfile, hideModalUpdateProfile, redirectAfterUpdate } from '../../common/redux/update-profile/update.profile.action';
import { STUDENT } from '../../common/functions/get-user-type';

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

    showModal = () => {
        const { showModalUpdateProfile } = this.props;
        showModalUpdateProfile();
    };

    handleCancel = () => {
        const { hideModalUpdateProfile } = this.props;
        hideModalUpdateProfile();
    };

    handleUpdateProfile(data) {
        this.props.updateUserProfileAction(data);
        this.handleCancel();
    }

    render() {
        const { isUpdateProfileModalVisible, redirectTo, role } = this.props;

        if (redirectTo) {
            return <Redirect to={redirectTo} />;
        }

        return (

            <div>
                <StyledBtnModal type="primary" onClick={this.showModal}>
                    Update profile
                </StyledBtnModal>

                <Modal
                    centered
                    visible={isUpdateProfileModalVisible}
                    onCancel={this.handleCancel}
                    okButtonProps={{ style: { display: 'none' } }}
                    cancelButtonProps={{ style: { display: 'none' } }}
                >


                    <Row justify="center">
                        <Col span={24}>
                            <Title level={2} align="center"> Edit profile </Title>
                            <Form {...layout} onFinish={this.handleUpdateProfile}>
                                {role !== STUDENT ?
                                    <Form.Item
                                        name="firstName"
                                        align="center"
                                        rules={[
                                            { required: true, message: 'Please input your name in English!' },
                                            { validator: validateEng },
                                        ]}
                                    >
                                        <StyledInput placeholder="Name" />
                                    </Form.Item>
                                    :
                                    <Form.Item
                                        name="firstNameEng"
                                        align="center"
                                        rules={[
                                            { required: true, message: 'Please input your name in English!' },
                                            { validator: validateEng },
                                        ]}
                                    >
                                        <StyledInput placeholder="Name in English" />
                                    </Form.Item>}

                                {role !== STUDENT ?
                                    <Form.Item
                                        name="lastName"
                                        align="center"
                                        rules={[
                                            { required: true, message: 'Please input your surname in English!' },
                                            { validator: validateEng },
                                        ]}
                                    >
                                        <StyledInput placeholder="Surname" />
                                    </Form.Item> :
                                    <Form.Item
                                        name="lastNameEng"
                                        align="center"
                                        rules={[
                                            { required: true, message: 'Please input your surname in English!' },
                                            { validator: validateEng },
                                        ]}
                                    >
                                        <StyledInput placeholder="Surname in English" />
                                    </Form.Item>}

                                {role !== STUDENT ? null :
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

                                {role !== STUDENT ? null :
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

                                {role !== STUDENT ? null :
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

const mapStateToProps = ({
    updateUserProfile: { isUpdateProfileModalVisible, redirectTo },
    login: { role }
}) => ({
    isUpdateProfileModalVisible, redirectTo, role
});

const mapDispatchToProps = { updateUserProfileAction, showModalUpdateProfile, hideModalUpdateProfile, redirectAfterUpdate };

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);