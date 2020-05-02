import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import TeachersRegistrationForm from '../teachers-registration-form';
import {
  hideTeacherRegisteredModal,
  registerTeacher,
  showTeacherRegisteredModal
} from '../../../common/redux/teachers/teachers.actions';

class TeachersPage extends Component {

  showModal = () => {
    const { showTeacherRegisteredModal } = this.props
    showTeacherRegisteredModal();
  };

  render() {
    const {
      isRegistrationModalVisible,
      hideTeacherRegisteredModal,
      registerTeacher,
    } = this.props;
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Create mentor
        </Button>
        <TeachersRegistrationForm
          visible={isRegistrationModalVisible}
          hideTeacherRegisteredModal={hideTeacherRegisteredModal}
          registerTeacher={registerTeacher}
        />
        <h1>5.2.1 task content</h1>
      </>
    );
  }
}

const mapStateToProps = ({
  teachersReducer: {
    isRegistrationModalVisible,
  },
}) => ({
  isRegistrationModalVisible,
});

const mapDispatchToProps = {
  hideTeacherRegisteredModal,
  registerTeacher,
  showTeacherRegisteredModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(TeachersPage);
