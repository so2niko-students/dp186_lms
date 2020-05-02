import React, { Component } from 'react';
import { Modal, Col, Input, Button, Row, Form, Typography } from 'antd';
import {
  hideTeacherRegisteredModal,
  registerTeacher,
  hideTeacherResponseModal,
} from '../../../common/redux/teachers/teachers.actions';

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

class TeachersRegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHideResponseModal = this.handleHideResponseModal.bind(this);
  }

  handleSubmit(data) {
    console.log(data);
    this.props.dispatch(registerTeacher(data));
  }

  handleCancel() {
    this.props.dispatch(hideTeacherRegisteredModal());
  }

  handleHideResponseModal() {
    this.props.dispatch(hideTeacherResponseModal());
  }

  render() {
    const { errorMessage, visible, responseVisible, isRegistered } = this.props;

    if (!isRegistered) {
      return (
        <>
          <Modal
            title="Basic Modal"
            visible={visible}
            onCancel={this.handleCancel}
            okButtonProps={{ style: { display: 'none' } }}
            cancelButtonProps={{ style: { display: 'none' } }}
          >
            <Row justify="center">
              <Col span={24}>
                <Title level={2} align="center">
                  Create new mentor
                </Title>
                <Form {...layout} onFinish={this.handleSubmit}>
                  <Form.Item
                    name="firstName"
                    align="center"
                    rules={[{ required: true, message: 'Please input your name in English!' }]}
                  >
                    <Input placeholder="Name in English" />
                  </Form.Item>
                  <Form.Item
                    name="lastName"
                    align="center"
                    rules={[{ required: true, message: 'Please input your surname in English!' }]}
                  >
                    <Input placeholder="Surname in English" />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    align="center"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                  >
                    <Input placeholder="Email" />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    align="center"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                  >
                    <Input.Password placeholder="Password" />
                  </Form.Item>
                  <Form.Item align="center" {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                      Create account
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Modal>
          <Modal
            title="Sorry but you did not register"
            visible={responseVisible}
            onOk={this.handleHideResponseModal}
            onCancel={this.handleHideResponseModal}
          >
            <p>{errorMessage}</p>
          </Modal>
        </>
      );
    } else {
      return (
        <Row justify="center">
          <Col align="center">
            <h1>Successfully registered. Later here will be redirect functionality</h1>
          </Col>
        </Row>
      );
    }
  }
}

export default TeachersRegistrationForm;
