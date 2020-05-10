import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  deleteTeacher,
  showModalDelete,
  hideModalDelete,
} from '../../../common/redux/teachers/teachers.actions';
import {
  Col,
  Groups,
  Students,
  Button,
  DeleteButton,
} from './styles';
import { Row, Modal } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import InputOrData from '../teachers-input-or-data';

class TeachersInformation extends Component {
  constructor(props) {
    super(props);
    this.showModalDelete = this.showModalDelete.bind(this);
    this.hideModalDelete = this.hideModalDelete.bind(this);
    this.handleDeleteTeacher = this.handleDeleteTeacher.bind(this);
  }

  handleDeleteTeacher() {
    const { deleteTeacherId } = this.props;
    this.props.deleteTeacher( { id: deleteTeacherId } )
  }

  showModalDelete(event) {
    this.props.showModalDelete( { id: +event.target.dataset.id } );
  }

  hideModalDelete() {
    this.props.hideModalDelete();
  }

  render() {
    const {
      id,
      groupsAmount,
      studentsAmount,
      changeNameIds,
      changeEmailIds,
      isDeleteModalVisible,
      firstName,
      lastName,
      email
    } = this.props;
    return (
      <>
        <Row>
          <Col span={24}>
            <div>
              <InputOrData type='name' changedIds={changeNameIds} id={id} renderData={`${firstName} ${lastName}`} />
              <DeleteButton data-id={id} onClick={this.showModalDelete}>
                <DeleteOutlined />
              </DeleteButton>
            </div>
            <div><InputOrData type='email' changedIds={changeEmailIds} id={id} renderData={email} /></div>
            <div>
              <p>
                <Groups>{`${groupsAmount} groups`}</Groups>
                <Students>{`${studentsAmount} students`}</Students>
              </p>
              <Button type="primary">Change password</Button>
            </div>
          </Col>
        </Row>
        <Modal
          title="Delete teacher"
          visible={isDeleteModalVisible}
          onOk={this.handleDeleteTeacher}
          onCancel={this.hideModalDelete}
          okText="DELETE"
          cancelText="CANCEL"
        >
          <p>Are you sure, you want to delete this teacher?</p>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = ({
  teachersReducer: { changeNameIds, changeEmailIds, isDeleteModalVisible, deleteTeacherId },
}) => ({
  changeNameIds,
  changeEmailIds,
  isDeleteModalVisible,
  deleteTeacherId,
});

const mapDispatchToProps = {
  deleteTeacher,
  showModalDelete,
  hideModalDelete,
};

export default connect(mapStateToProps, mapDispatchToProps)(TeachersInformation);
