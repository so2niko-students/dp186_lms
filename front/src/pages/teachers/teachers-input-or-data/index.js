import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  updateName,
  cancelNameUpdating,
  updateNameSuccess,
  updateEmail,
  cancelEmailUpdating,
  updateEmailSuccess,
  rememberUpdatingId,
} from '../../../common/redux/teachers/teachers.actions';
import { NameSurname, Email, EditButton, SaveButton, CancelButton, Form, Item } from './styles';
import { Input } from 'antd';
import { EditOutlined, SaveOutlined, RollbackOutlined } from '@ant-design/icons';
import { validateNameSurname } from '../../../common/validators/form.validator';

const layout = {
  labelCol: { span: 20 },
  wrapperCol: { span: 24 },
};

class InputOrData extends Component {
  constructor(props) {
    super(props);
    this.updateName = this.updateName.bind(this);
    this.cancelNameUpdating = this.cancelNameUpdating.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.rememberId = this.rememberId.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.cancelEmailUpdating = this.cancelEmailUpdating.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  updateName(event) {
    const { updateName } = this.props;
    updateName({ id: +event.target.dataset.id });
  }

  cancelNameUpdating(event) {
    const { cancelNameUpdating } = this.props;
    cancelNameUpdating({ id: +event.target.dataset.id });
  }

  handleNameChange(data) {
    const { updateNameSuccess, updatingId } = this.props;
    const arr = data.nameSurname.split(' ');
    const [firstName, lastName] = arr;
    data = {
      firstName,
      lastName,
      id: updatingId,
    };

    updateNameSuccess(data);
  }

  rememberId(event) {
    this.props.rememberUpdatingId({ id: +event.target.dataset.id });
  }

  updateEmail(event) {
    const { updateEmail } = this.props;
    updateEmail({ id: +event.target.dataset.id });
  }

  cancelEmailUpdating(event) {
    const { cancelEmailUpdating } = this.props;
    cancelEmailUpdating({ id: +event.target.dataset.id });
  }

  handleEmailChange(data) {
    const { updateEmailSuccess, updatingId } = this.props;
    data.id = updatingId;
    updateEmailSuccess(data);
  }

  render() {
    const { type, changedIds, id, renderData } = this.props;

    return (
      <>
        {changedIds.includes(id) ? (
          <>
            <Form
              {...layout}
              onFinish={type === 'name' ? this.handleNameChange : this.handleEmailChange}
            >
              <Item
                name={type === 'name' ? 'nameSurname' : 'email'}
                align="center"
                rules={
                  type === 'name'
                    ? [
                        {
                          required: true,
                          message: 'Please input new name and surname in English!',
                        },
                        { validator: validateNameSurname },
                      ]
                    : [
                        { required: true, message: 'Please input new email!' },
                        { type: 'email', message: 'The input is not valid E-mail!' },
                      ]
                }
              >
                <Input placeholder={type === 'name' ? 'Name in English' : 'Email'} />
              </Item>
              <Form.Item align="center">
                <SaveButton data-id={id} onClick={this.rememberId} htmlType="submit">
                  <SaveOutlined />
                </SaveButton>
              </Form.Item>
            </Form>
            <CancelButton
              data-id={id}
              onClick={type === 'name' ? this.cancelNameUpdating : this.cancelEmailUpdating}
            >
              <RollbackOutlined />
            </CancelButton>
          </>
        ) : (
          <>
            {type === 'name' ? (
              <NameSurname>{renderData}</NameSurname>
            ) : (
              <Email>{renderData}</Email>
            )}
            <EditButton data-id={id} onClick={type === 'name' ? this.updateName : this.updateEmail}>
              <EditOutlined />
            </EditButton>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = ({ teachersReducer: { updatingId } }) => ({
  updatingId,
});

const mapDispatchToProps = {
  updateName,
  cancelNameUpdating,
  updateNameSuccess,
  updateEmail,
  cancelEmailUpdating,
  updateEmailSuccess,
  rememberUpdatingId,
};

export default connect(mapStateToProps, mapDispatchToProps)(InputOrData);
