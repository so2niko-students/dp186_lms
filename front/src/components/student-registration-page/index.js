import React, { Component } from 'react';
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

export class StudentRegistrationPage extends Component {
  constructor(props) {
    super(props);
    this.match = props.match;
  }

  render() {
    console.log(this.match);
    return (
      <Row justify="center">
        <Col span={8}>
          <Title level={2} align="center">
            Register as student
          </Title>
          <Form {...layout}>
            <Form.Item align="center" rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input placeholder="Name in English" />
            </Form.Item>
            <Form.Item align="center" rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input placeholder="Surname in English" />
            </Form.Item>
            <Form.Item align="center" rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input placeholder="Name in Ukrainian" />
            </Form.Item>
            <Form.Item align="center" rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item align="center" rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input placeholder="Phone number" />
            </Form.Item>
            <Form.Item align="center" rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item align="center" rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input.Password placeholder="Confirm password" />
            </Form.Item>
              <Form.Item align="center"  {...tailLayout} >
                <Button  type="primary" htmlType="submit">
                  Create account
                </Button>
              </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

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
