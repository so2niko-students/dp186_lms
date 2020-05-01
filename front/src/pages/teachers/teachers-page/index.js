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
      match,
      dispatch,
      isTeacherRegistered,
      isRegistrationModalVisible,
      isResponseModalVisible,
      teacherErrorMessage,
    } = this.props;
    console.log(this.props);
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
      </>
    );
  }
}

const mapStateToProps = ({
  teacherRegister: {
    isRegistrationModalVisible,
    isResponseModalVisible,
    isRegistered: isTeacherRegistered,
    errorMessage: teacherErrorMessage,
  },
}) => ({
  isRegistrationModalVisible,
  isResponseModalVisible,
  isTeacherRegistered,
  teacherErrorMessage,
});

export default connect(mapStateToProps)(StudentRegistrationPage);
