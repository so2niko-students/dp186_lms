import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  changeName,
  cancelNameChanging,
  updateName,
  changeEmail,
  cancelEmailChanging,
  updateEmail,
  deleteTeacher,
} from '../../../common/redux/teachers/teachers.actions';
import {
  Col,
  NameSurname,
  Email,
  Groups,
  Students,
  Button,
  EditButton,
  DeleteButton,
  SaveButton,
  CancelButton,
  Form,
  Item,
} from './styles';
import { Row, Input } from 'antd';
import { DeleteOutlined, EditOutlined, SaveOutlined, RollbackOutlined } from '@ant-design/icons';
import { validateNameSurname } from '../../../common/validators/form.validator';

const layout = {
  labelCol: { span: 20 },
  wrapperCol: { span: 24 },
};

class TeachersInformation extends Component {
  constructor(props) {
    super(props);
    this.changeName = this.changeName.bind(this);
    this.cancelNameChanging = this.cancelNameChanging.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.rememberId = this.rememberId.bind(this);
    this.renderChangeNameOrActualName = this.renderChangeNameOrActualName.bind(this);
    this.renderChangeEmailOrActualEmail = this.renderChangeEmailOrActualEmail.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.cancelEmailChanging = this.cancelEmailChanging.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  changeName(event) {
    const id = +event.target.dataset.id;
    const { changeName } = this.props;
    changeName(id);
  }

  cancelNameChanging(event) {
    const id = +event.target.dataset.id;
    const { cancelNameChanging } = this.props;
    cancelNameChanging(id);
  }

  handleNameChange(data) {
    const arr = data.nameSurname.split(' ');
    const [firstName, lastName] = arr;
    data = {
      firstName,
      lastName,
      id: this.id,
    };
    console.log(data);
    const { updateName } = this.props;
    updateName(data);
  }

  rememberId(event) {
    const id = +event.target.dataset.id;
    this.id = id;
  }

  renderChangeNameOrActualName(id, changeNameIds) {
    if (changeNameIds.includes(id)) {
      return (
        <>
          <Form {...layout} onFinish={this.handleNameChange}>
            <Item
              name="nameSurname"
              align="center"
              rules={[
                { required: true, message: 'Please input new name and surname in English!' },
                { validator: validateNameSurname },
              ]}
            >
              <Input placeholder="Name in English" />
            </Item>
            <Form.Item align="center">
              <SaveButton data-id={id} onClick={this.rememberId} htmlType="submit">
                <SaveOutlined />
              </SaveButton>
            </Form.Item>
          </Form>
          <CancelButton data-id={id} onClick={this.cancelNameChanging}>
            <RollbackOutlined />
          </CancelButton>
        </>
      );
    } else {
      const { firstName, lastName } = this.props;
      return (
        <>
          <NameSurname>{`${firstName} ${lastName}`}</NameSurname>
          <EditButton data-id={id} onClick={this.changeName}>
            <EditOutlined />
          </EditButton>
        </>
      );
    }
  }

  changeEmail(event) {
    const id = +event.target.dataset.id;
    const { changeEmail } = this.props;
    changeEmail(id);
  }

  cancelEmailChanging(event) {
    const id = +event.target.dataset.id;
    const { cancelEmailChanging } = this.props;
    cancelEmailChanging(id);
  }

  handleEmailChange(data) {
    data.id = this.id;
    const { updateEmail } = this.props;
    updateEmail(data);
  }

  renderChangeEmailOrActualEmail(id, changeEmailIds) {
    if (changeEmailIds.includes(id)) {
      return (
        <>
          <Form {...layout} onFinish={this.handleEmailChange}>
            <Item
              name="email"
              align="center"
              rules={[
                { required: true, message: 'Please input new email!' },
                { type: 'email', message: 'The input is not valid E-mail!' },
              ]}
            >
              <Input placeholder="Email" />
            </Item>
            <Form.Item align="center">
              <SaveButton data-id={id} onClick={this.rememberId} htmlType="submit">
                <SaveOutlined />
              </SaveButton>
            </Form.Item>
          </Form>
          <CancelButton data-id={id} onClick={this.cancelEmailChanging}>
            <RollbackOutlined />
          </CancelButton>
        </>
      );
    } else {
      const { email } = this.props;
      return (
        <>
          <Email>{email}</Email>
          <EditButton data-id={id} onClick={this.changeEmail}>
            <EditOutlined />
          </EditButton>
        </>
      );
    }
  }

  handleDeleteTeacher() {}

  showModalDelete(event) {
    this.rememberId(event);
    this.props.showModalDelete();
  }

  render() {
    const { id, groupsAmount, studentsAmount, changeNameIds, changeEmailIds } = this.props;
    return (
      <>
        <Row>
          <Col span={24}>
            <div>
              {this.renderChangeNameOrActualName(id, changeNameIds)}
              <DeleteButton>
                <DeleteOutlined />
              </DeleteButton>
            </div>
            <div>{this.renderChangeEmailOrActualEmail(id, changeEmailIds)}</div>
            <div>
              <p>
                <Groups>{`${groupsAmount} groups`}</Groups>
                <Students>{`${studentsAmount} students`}</Students>
              </p>
              <Button type="primary">Change password</Button>
            </div>
          </Col>
        </Row>
        {/* <Modal
          title="Modal"
          visible={isDeleteModalVisible}
          onOk={this.handleDeleteTeacher}
          onCancel={this.handleHideModalDelete}
          okText="DELETE"
          cancelText="CANCEL"
        >
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
        </Modal> */}
      </>
    );
  }
}

const mapStateToProps = ({ teachersReducer: { changeNameIds, changeEmailIds } }) => ({
  changeNameIds,
  changeEmailIds,
});

const mapDispatchToProps = {
  changeName,
  cancelNameChanging,
  updateName,
  changeEmail,
  cancelEmailChanging,
  updateEmail,
  deleteTeacher,
};

export default connect(mapStateToProps, mapDispatchToProps)(TeachersInformation);
