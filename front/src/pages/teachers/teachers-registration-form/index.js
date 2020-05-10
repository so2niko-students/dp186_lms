import React, { Component } from 'react';
import { Modal, Col, Input, Row, Form, Typography } from 'antd';
import { Button, SpinnerContainer } from './styles';
import { validateEng } from '../../../common/validators/form.validator';
import Spinner from '../../../components/spinner';

const { Title } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

class TeachersRegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    const { registerTeacher, showLoader } = this.props;
    showLoader();
    registerTeacher(data);
  }

  handleCancel() {
    const { hideTeacherRegisteredModal } = this.props;
    hideTeacherRegisteredModal();
  }

  renderSpinnerOrBtn() {
    const { loading } = this.props;
    if (loading) {
      return (
        <SpinnerContainer>
          <Spinner load={Spinner.loading()} />;
        </SpinnerContainer>
      );
    } else {
      return (
        <Form.Item align="center">
          <Button type="primary" htmlType="submit">
            Save new mentor
          </Button>
        </Form.Item>
      );
    }
  }

  render() {
    const { visible } = this.props;

    return (
      <>
        <Modal
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
                  rules={[
                    { required: true, message: 'Please input your name in English!' },
                    { validator: validateEng },
                  ]}
                >
                  <Input placeholder="Name in English" />
                </Form.Item>
                <Form.Item
                  name="lastName"
                  align="center"
                  rules={[
                    { required: true, message: 'Please input your surname in English!' },
                    { validator: validateEng },
                  ]}
                >
                  <Input placeholder="Surname in English" />
                </Form.Item>
                <Form.Item
                  name="email"
                  align="center"
                  rules={[
                    { required: true, message: 'Please input your email!' },
                    { type: 'email', message: 'The input is not valid E-mail!' },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                  name="password"
                  align="center"
                  rules={[
                    { required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password minLength={6} placeholder="Password" />
                </Form.Item>
                {this.renderSpinnerOrBtn()}
              </Form>
            </Col>
          </Row>
        </Modal>
      </>
    );
  }
}

export default TeachersRegistrationForm;
