import React, { Component } from 'react';
import { connect } from 'react-redux';
import obj from '../../common/redux/actions';
import { Form, Layout, Row, Typography } from 'antd';
import { Col, Input, Button } from './style';

const { Title } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class StudentRegistrationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNameEng: '',
      lastNameEng: '',
      firstNameUkr: '',
      lastNameUkr: '',
      email: '',
      phoneNumber: '',
      password: '',
      passwordConfirmation: '',
      groupToken: '1',
    };
    this.match = props.match;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateEng = this.validateEng.bind(this);
    this.validateUkr = this.validateUkr.bind(this);
    this.validatePhoneNumber = this.validatePhoneNumber.bind(this);
    this.confirmPassword = this.confirmPassword.bind(this);
  }

  handleChange(event) {
    event.persist();
    this.setState((state) => {
      const { name, value } = event.target;
      const newData = { [name]: value };
      const newState = { ...state, ...newData };

      return newState;
    });
  }

  // validateData({ firstNameEng, firstNameUkr }) {

  //   const {dispatch} = this.props;

  //   // const engRegexp = /^[A-Z']+?$/
  //   const engRegexp = /^[A-Z]{1}([a-z]{1,})?$/

  //   const ukrRegexp = /^[А-ЯІЇЄ]{1}([а-яіїє]{1,})?$/;

  //   const excludeRuLetters = /^[^ЫЭЪЁ]{1}([^ыэъё]{1,})?$/;

  //   const emailRegexp = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

  //   const phoneNumberRegexp = /\+380\d{9}/;

  //   // console.log('firstNameEng' , engRegexp.test(firstNameEng));

  //   const isfirstNameEngValid = engRegexp.test(firstNameEng)

  //   if(!isfirstNameEngValid) {
  //     dispatch(obj.validatefirstNameEng())
  //   }

  //   // console.log('firstNameUkr' , ukrRegexp.test(firstNameUkr));
  //   // console.log('firstNameUkr' , excludeRuLetters.test(firstNameUkr));
  // }

  handleSubmit(data) {
    console.log('handleSubmit');
    data.groupToken = this.match.params.token;

    this.props.dispatch(obj.studentRegistered(data));
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
    const {
      firstNameEng,
      lastNameEng,
      firstNameUkr,
      lastNameUkr,
      email,
      phoneNumber,
      password,
      passwordConfirmation,
    } = this.state;
    console.log(this.props);
    const { isRegistered, response } = this.props.student.studentRegister;

    if (isRegistered === 'registration') {
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
                <Input name="firstNameEng" value={firstNameEng} placeholder="Name in English" />
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
                <Input name="lastNameEng" value={lastNameEng} placeholder="Surname in English" />
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
                <Input name="firstNameUkr" value={firstNameUkr} placeholder="Name in Ukrainian" />
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
                <Input name="lastNameUkr" value={lastNameUkr} placeholder="Surname in Ukrainian" />
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
                <Input name="email" value={email} placeholder="Email" />
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
                <Input name="phoneNumber" value={phoneNumber} placeholder="Phone number" />
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
                <Input.Password name="password" value={password} placeholder="Password" />
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
                <Input.Password
                  name="passwordConfirmation"
                  value={passwordConfirmation}
                  placeholder="Confirm password"
                />
              </Form.Item>
              <Form.Item align="center" {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Create account
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      );
    } else if (isRegistered) {
      return <h1>Registered</h1>;
    } else if (response.json.error === 'User with provided email already exists') {
      return <h1>User with provided email already exists</h1>;
    } else if (response.json.error === 'Group not found') {
      return <h1>Group not found</h1>;
    }
  }
}

const mapStateToProps = (student) => ({ student });

export default connect(mapStateToProps)(StudentRegistrationPage);

// { validator: (_, value) => value == 'h1' ? Promise.resolve() : Promise.reject('Should accept agreement') }

/* <Row justify="center">
<Col span={8}>
  <Title level={2} align="center">
    Register as student
  </Title>
  <Form {...layout} >
    <Form.Item  onChange={this.handleChange} align="center" rules={[{ required: true, message: 'Please input your name in English!' }]}>
      <Input name='firstNameEng' value={firstNameEng} placeholder="Name in English" />
    </Form.Item>
    <Form.Item  onChange={this.handleChange} align="center" rules={[{ required: true, message: 'Please input your surname in English!' }]}>
      <Input name='lastNameEng' value={lastNameEng} placeholder="Surname in English" />
    </Form.Item>
    <Form.Item  onChange={this.handleChange} align="center" rules={[{ required: true, message: 'Please input name in Ukrainian!' }]}>
      <Input name='firstNameUkr' value={firstNameUkr} placeholder="Name in Ukrainian" />
    </Form.Item>
    <Form.Item  onChange={this.handleChange} align="center" rules={[{ required: true, message: 'Please input your surname in Ukrainian!' }]}>
      <Input name='lastNameUkr' value={lastNameUkr} placeholder="Surname in Ukrainian" />
    </Form.Item>
    <Form.Item  onChange={this.handleChange} align="center" rules={[{ required: true, message: 'Please input your email!' }]}>
      <Input name='email' value={email} placeholder="Email" />
    </Form.Item>
    <Form.Item  onChange={this.handleChange} align="center" rules={[{ required: true, message: 'Please input your phone number!' }]}>
      <Input name='phoneNumber' value={phoneNumber} placeholder="Phone number" />
    </Form.Item>
    <Form.Item  onChange={this.handleChange} align="center" rules={[{ required: true, message: 'Please input your password!' }]}>
      <Input.Password name='password' value={password} placeholder="Password" />
    </Form.Item>
    <Form.Item  onChange={this.handleChange} align="center" rules={[{ required: true, message: 'Please input your confirmed password!' }]}>
      <Input.Password name='passwordConfirmation' value={passwordConfirmation} placeholder="Confirm password" />
    </Form.Item>
      <Form.Item align="center"  {...tailLayout} >
        <Button type="primary" onClick={this.handleSubmit} htmlType="submit">
          Create account
        </Button>
      </Form.Item>
  </Form>
</Col>
</Row> */

// <Row justify="center">
// <Col span={8}>
//   <Title level={2} align="center">
//     Register as student
//   </Title>
//   <Form {...layout} >
//     <Form.Item  align="center" rules={[{ required: true, message: 'Please input your name in English!' }]}>
//       <Input  placeholder="Name in English" />
//     </Form.Item>
//     <Form.Item   align="center" rules={[{ required: true, message: 'Please input your surname in English!' }]}>
//       <Input  placeholder="Surname in English" />
//     </Form.Item>
//     <Form.Item   align="center" rules={[{ required: true, message: 'Please input name in Ukrainian!' }]}>
//       <Input  placeholder="Name in Ukrainian" />
//     </Form.Item>
//     <Form.Item   align="center" rules={[{ required: true, message: 'Please input your surname in Ukrainian!' }]}>
//       <Input  placeholder="Surname in Ukrainian" />
//     </Form.Item>
//     <Form.Item   align="center" rules={[{ required: true, message: 'Please input your email!' }]}>
//       <Input  placeholder="Email" />
//     </Form.Item>
//     <Form.Item   align="center" rules={[{ required: true, message: 'Please input your phone number!' }]}>
//       <Input  placeholder="Phone number" />
//     </Form.Item>
//     <Form.Item   align="center" rules={[{ required: true, message: 'Please input your password!' }]}>
//       <Input.Password  placeholder="Password" />
//     </Form.Item>
//     <Form.Item   align="center" rules={[{ required: true, message: 'Please input your confirmed password!' }]}>
//       <Input.Password  placeholder="Confirm password" />
//     </Form.Item>
//       <Form.Item align="center"  {...tailLayout} >
//         <Button type="primary"  htmlType="submit">
//           Create account
//         </Button>
//       </Form.Item>
//   </Form>
// </Col>
// </Row>

// <Layout>
//   <Form>
//     <Form.Item>
//       <Input />
//     </Form.Item>
//   </Form>
// </Layout>

// (
//   <div>
//     <h3>Register as student</h3>
//     <input type="text" className="" placeholder="Name in English" />
//     <input type="text" className="" placeholder="Surname in English" />
//     <input type="text" className="" placeholder="Name in Ukrainian" />
//     <input type="text" className="" placeholder="Surname in Ukrainian" />
//     <input type="email" className="" placeholder="Email" />
//     <input type="tel" className="" placeholder="Phone number" />
//     <input type="password" className="" placeholder="Password" />
//     <input type="password" className="" placeholder="Confirm password" />
//   </div>
// );
