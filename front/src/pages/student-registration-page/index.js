import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Form, Typography } from 'antd';
import { registerStudent } from '../../common/redux/students/students.action';
import { validateEng, validateUkr, validatePhoneNumber } from '../../common/validators/form.validator';
import { Col, Input, Button } from './styles';
import { showNotification } from '../../common/notifications/notifications';

const { Title } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

class StudentRegistrationPage extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderStudentRegistrationForm = this.renderStudentRegistrationForm.bind(this);
  }

  componentDidUpdate() {
    const {isRegistered, isFormSended, errorMessage, email } = this.props;

    if (!isRegistered && isFormSended) {
      showNotification('Sorry but you did not register', errorMessage, 'error');
    } else {
      showNotification('Successfully registered', `User with provided email ${email} was registered`, 'success');
    }
  }

  handleSubmit(data) {
    data.groupToken = this.props.match.params.token;
    this.props.registerStudent(data);
  }

  renderStudentRegistrationForm() {
    return (
      <Row justify="center">
        <Col span={8}>
          <Title level={2} align="center">
            Register as student
          </Title>
          <Form {...layout} onFinish={this.handleSubmit}>
            <Form.Item
              name="firstNameEng"
              align="center"
              rules={[
                { required: true, message: 'Please input your name in English!' },
                { validator: validateEng },
              ]}
            >
              <Input placeholder="Name in English" />
            </Form.Item>
            <Form.Item
              name="lastNameEng"
              align="center"
              rules={[
                { required: true, message: 'Please input your surname in English!' },
                { validator: validateEng },
              ]}
            >
              <Input placeholder="Surname in English" />
            </Form.Item>
            <Form.Item
              name="firstNameUkr"
              align="center"
              rules={[
                { required: true, message: 'Please input name in Ukrainian!' },
                { validator: validateUkr },
              ]}
            >
              <Input placeholder="Name in Ukrainian" />
            </Form.Item>
            <Form.Item
              name="lastNameUkr"
              align="center"
              rules={[
                { required: true, message: 'Please input your surname in Ukrainian!' },
                { validator: validateUkr },
              ]}
            >
              <Input placeholder="Surname in Ukrainian" />
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
              name="phoneNumber"
              align="center"
              rules={[
                { required: true, message: 'Please input your phone number!' },
                { validator: validatePhoneNumber },
              ]}
            >
              <Input placeholder="Phone number" />
            </Form.Item>
            <Form.Item
              name="password"
              dependencies={['password']}
              align="center"
              rules={[
                { required: true, message: 'Please input your password!' },
                {
                  validator: (_, value) =>
                    value.length >= 6
                      ? Promise.resolve()
                      : Promise.reject('Password length should be 6 or more symbols'),
                },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item
              name="passwordConfirmation"
              align="center"
              hasFeedback
              rules={[
                { required: true, message: 'Please input your confirmed password!' },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('The two passwords that you entered do not match!');
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Confirm password" />
            </Form.Item>
            <Form.Item align="center" >
              <Button
                type="primary"
                htmlType="submit"
              >
                Create account
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }

  render() {
    const { isRegistered } = this.props;

    if (!isRegistered) {
      return (
        <>
          {this.renderStudentRegistrationForm()}
        </>
      );
    } else if (isRegistered) {
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

const mapStateToProps = ({
  studentsReducer: { errorMessage, isRegistered, isModalVisible, isFormSended, email },
}) => ({ errorMessage, isRegistered, isModalVisible, isFormSended, email });

const mapDispatchToProps = {
  registerStudent
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentRegistrationPage);
