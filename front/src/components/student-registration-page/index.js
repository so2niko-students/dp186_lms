import React, { Component } from 'react';
import { connect } from 'react-redux';
import obj from '../../common/redux/actions'
import { Form, Layout, Row, Typography } from 'antd';
import { Col, Input, Button } from './style';

const { Title } = Typography;

const layout = { 
  labelCol: { span: 8, },
  wrapperCol: { span: 16, },
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
  }

  handleChange(event) {
    event.persist();
    this.setState(state => {
      const { name, value } = event.target;
      const newData = { [name]: value }
      const newState = {...state, ...newData };

      return newState
    })
  }

  async handleSubmit(data) {

    this.props.dispatch(obj.studentRegistered(data));
    // const url = 'http://127.0.0.1:5000/students';
    // const body = JSON.stringify(this.state);
    // const options = {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body
    // }
    // const response = await fetch(url, options);

    // const json = await response.json();
    // console.log(json);

    // return json;
}


  render() {
    const { firstNameEng, lastNameEng, firstNameUkr, lastNameUkr, email, phoneNumber, password, passwordConfirmation } = this.state;
    // console.log(this.match);
    return (
<Row justify="center">
<Col span={8}>
  <Title level={2} align="center">
    Register as student
  </Title>
  <Form {...layout} onFinish={this.handleSubmit}>
    <Form.Item name='firstNameEng' onChange={this.handleChange} align="center" rules={[{ required: true, message: 'Please input your name in English!' }]}>
      <Input name='firstNameEng' value={firstNameEng} placeholder="Name in English" />
    </Form.Item>
    {/* <Form.Item name='lastNameEng' onChange={this.handleChange} align="center" rules={[{ required: true, message: 'Please input your surname in English!' }]}>
      <Input name='lastNameEng' value={lastNameEng} placeholder="Surname in English" />
    </Form.Item>
    <Form.Item name='firstNameUkr' onChange={this.handleChange} align="center" rules={[{ required: true, message: 'Please input name in Ukrainian!' }]}>
      <Input name='firstNameUkr' value={firstNameUkr} placeholder="Name in Ukrainian" />
    </Form.Item>
    <Form.Item name='lastNameUkr' onChange={this.handleChange} align="center" rules={[{ required: true, message: 'Please input your surname in Ukrainian!' }]}>
      <Input name='lastNameUkr' value={lastNameUkr} placeholder="Surname in Ukrainian" />
    </Form.Item>
    <Form.Item name='email' onChange={this.handleChange} align="center" rules={[{ required: true, message: 'Please input your email!' }]}>
      <Input name='email' value={email} placeholder="Email" />
    </Form.Item>
    <Form.Item name='phoneNumber' onChange={this.handleChange} align="center" rules={[{ required: true, message: 'Please input your phone number!' }]}>
      <Input name='phoneNumber' value={phoneNumber} placeholder="Phone number" />
    </Form.Item>
    <Form.Item name='password' onChange={this.handleChange} align="center" rules={[{ required: true, message: 'Please input your password!' }]}>
      <Input.Password name='password' value={password} placeholder="Password" />
    </Form.Item>
    <Form.Item name='passwordConfirmation' onChange={this.handleChange} align="center" rules={[{ required: true, message: 'Please input your confirmed password!' }]}>
      <Input.Password name='passwordConfirmation' value={passwordConfirmation} placeholder="Confirm password" />
    </Form.Item> */}
      <Form.Item align="center"  {...tailLayout} >
        <Button type="primary" htmlType="submit">
          Create account
        </Button>
      </Form.Item>
  </Form>
</Col>
</Row>
    );
  }
}

const mapStateToProps = (_student) => ({_student});

export default connect(mapStateToProps)(StudentRegistrationPage);


























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
