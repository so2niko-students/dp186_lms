import React, { Component } from 'react';
import { studentRegistered } from '../../../common/redux/actions';
import { Row, Form, Typography } from 'antd';
import { Col, Input, Button } from '../teachers-some-form/style';

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

class StudentRegistrationPage extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateEng = this.validateEng.bind(this);
    this.validateUkr = this.validateUkr.bind(this);
    this.validatePhoneNumber = this.validatePhoneNumber.bind(this);
    this.confirmPassword = this.confirmPassword.bind(this);
  }

  handleSubmit(data) {
    data.groupToken = this.props.token;

    this.props.dispatch(studentRegistered(data));
  }

  async validateEng(_, value) {
    const engRegexp = /^[A-Z]{1}([a-z]{1,})?$/;
    if (engRegexp.test(value)) {
      return Promise.resolve();
    } else {
      return Promise.reject('Not valid name or surname in English');
    }
  }

  async validateUkr(_, value) {
    const ukrRegexp = /^[А-ЯІЇЄ]{1}([а-яіїє]{1,})?$/;
    const excludeRuLetters = /^[^ЫЭЪЁ]{1}([^ыэъё]{1,})?$/;

    if (ukrRegexp.test(value) && excludeRuLetters.test(value)) {
      return Promise.resolve();
    } else {
      return Promise.reject('Not valid name or surname in Ukrainian');
    }
  }

  async validatePhoneNumber(_, value) {
    const phoneNumberRegexp = /\+380\d{9}/;

    if (phoneNumberRegexp.test(value)) {
      return Promise.resolve();
    } else {
      return Promise.reject('Not valid phone number');
    }
  }

  async confirmPassword({ getFieldValue }) {
    return {
      validator(rule, value) {
        if (!value || getFieldValue('password') === value) {
          return Promise.resolve();
        }
        return Promise.reject('The two passwords that you entered do not match!');
      },
    };
  }

  render() {
    return (
      <Row justify="center">
        <Col span={8}>
          <Title level={2} align="center">
            Register as student
          </Title>
          <Form {...layout} onFinish={this.handleSubmit}>
            <Form.Item
              name="firstNameEng"
              onChange={this.handleChange}
              align="center"
              rules={[
                { required: true, message: 'Please input your name in English!' },
                { validator: this.validateEng },
              ]}
            >
              <Input placeholder="Name in English" />
            </Form.Item>
            <Form.Item
              name="lastNameEng"
              onChange={this.handleChange}
              align="center"
              rules={[
                { required: true, message: 'Please input your surname in English!' },
                { validator: this.validateEng },
              ]}
            >
              <Input placeholder="Surname in English" />
            </Form.Item>
            <Form.Item
              name="firstNameUkr"
              onChange={this.handleChange}
              align="center"
              rules={[
                { required: true, message: 'Please input name in Ukrainian!' },
                { validator: this.validateUkr },
              ]}
            >
              <Input placeholder="Name in Ukrainian" />
            </Form.Item>
            <Form.Item
              name="lastNameUkr"
              onChange={this.handleChange}
              align="center"
              rules={[
                { required: true, message: 'Please input your surname in Ukrainian!' },
                { validator: this.validateUkr },
              ]}
            >
              <Input placeholder="Surname in Ukrainian" />
            </Form.Item>
            <Form.Item
              name="email"
              onChange={this.handleChange}
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
              onChange={this.handleChange}
              align="center"
              rules={[
                { required: true, message: 'Please input your phone number!' },
                { validator: this.validatePhoneNumber },
              ]}
            >
              <Input placeholder="Phone number" />
            </Form.Item>
            <Form.Item
              name="password"
              dependencies={['password']}
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
            <Form.Item align="center" {...tailLayout} >
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
}

export default StudentRegistrationPage;
