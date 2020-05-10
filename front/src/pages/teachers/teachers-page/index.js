import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import TeachersRegistrationForm from '../teachers-registration-form';
import {
  hideTeacherRegisteredModal,
  registerTeacher,
  showTeacherRegisteredModal,
  showLoader
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
      loading,
      showLoader
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
          loading={loading}
          showLoader={showLoader}
        />
        <h1>5.2.1 task content</h1>
      </>
    );
  }
}

const mapStateToProps = ({
  teachersReducer: {
    isRegistrationModalVisible,
    loading
  },
}) => ({
  isRegistrationModalVisible,
  loading
});

const mapDispatchToProps = {
  hideTeacherRegisteredModal,
  registerTeacher,
  showTeacherRegisteredModal,
  showLoader
};

export default connect(mapStateToProps, mapDispatchToProps)(TeachersPage);
