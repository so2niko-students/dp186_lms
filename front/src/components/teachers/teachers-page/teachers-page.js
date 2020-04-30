import React, { Component } from 'react';
import { hideStudentRegisteredModal } from '../../../common/redux/actions';
import { showTeacherRegisteredModal } from '../../../common/redux/actions';
import { connect } from 'react-redux';
import { Modal, Row, Col, Button } from 'antd';
import StudentRegistrationForm from '../teachers-some-form';
import TeachersRegistrationForm from '../teachers-registatration-form';

class StudentRegistrationPage extends Component {
  constructor(props) {
    super(props);
    this.handleHideModal = this.handleHideModal.bind(this);
  }

  state = { testVisible: false };

  showModal = () => {
    this.props.dispatch(showTeacherRegisteredModal());
  };

  handleHideModal() {
    this.props.dispatch(hideStudentRegisteredModal());
  }

  render() {
    const {
      errorMessage,
      isRegistered,
      isModalVisible,
      match,
      dispatch,
      isTeacherRegistered,
      isRegistrationModalVisible,
      isResponseModalVisible,
      teacherErrorMessage
    } = this.props;
    console.log(this.props);
    if (!isRegistered) {
      return (
        <>
          <Button type="primary" onClick={this.showModal}>
            Open Modal
          </Button>
          <TeachersRegistrationForm
            visible={isRegistrationModalVisible}
            responseVisible={isResponseModalVisible}
            dispatch={dispatch}
            errorMessage={teacherErrorMessage}
            isRegistered={isTeacherRegistered}
          />
          <StudentRegistrationForm token={match.params.token} dispatch={dispatch} />
          <Modal
            title="Sorry but you did not register"
            visible={isModalVisible}
            onOk={this.handleHideModal}
            onCancel={this.handleHideModal}
          >
            <p>{errorMessage}</p>
          </Modal>
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
  studentRegister: { errorMessage, isRegistered, isModalVisible },
  teacherRegister: { isRegistrationModalVisible, isResponseModalVisible, isRegistered: isTeacherRegistered, errorMessage: teacherErrorMessage },
}) => ({
  errorMessage,
  isRegistered,
  isModalVisible,
  isRegistrationModalVisible,
  isResponseModalVisible,
  isTeacherRegistered,
  teacherErrorMessage
});

export default connect(mapStateToProps)(StudentRegistrationPage);
