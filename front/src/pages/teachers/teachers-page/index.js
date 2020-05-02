import React, { Component } from 'react';
import { showTeacherRegisteredModal } from '../../../common/redux/teachers/teachers.actions';
import { connect } from 'react-redux';
import { Modal, Row, Col, Button } from 'antd';
import TeachersRegistrationForm from '../teachers-registration-form';

class StudentRegistrationPage extends Component {
  constructor(props) {
    super(props);
  }

  state = { testVisible: false };

  showModal = () => {
    this.props.dispatch(showTeacherRegisteredModal());
  };


  render() {
    const {
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
          Create mentor
        </Button>
        <TeachersRegistrationForm
          visible={isRegistrationModalVisible}
          responseVisible={isResponseModalVisible}
          dispatch={dispatch}
          errorMessage={teacherErrorMessage}
          isRegistered={isTeacherRegistered}
        />
        <h1>5.2.1 task content</h1>
      </>
    );
  }
}

const mapStateToProps = ({
  teachersReducer: {
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
