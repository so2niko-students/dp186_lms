import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'antd';
import { Button, Title, Col } from './styles';
import TeachersRegistrationForm from '../teachers-registration-form';
import TeachersInformation from '../teachers-information';
import {
  hideTeacherRegisteredModal,
  registerTeacher,
  showTeacherRegisteredModal,
  showLoader,
  loadTeachers,
} from '../../../common/redux/teachers/teachers.actions';

class TeachersPage extends Component {
  constructor(props) {
    super(props);
    this.loadData()
  }

  loadData() {
    this.props.loadTeachers();
  }

  showModal = () => {
    const { showTeacherRegisteredModal } = this.props;
    showTeacherRegisteredModal();
  };

  render() {
    const {
      isRegistrationModalVisible,
      hideTeacherRegisteredModal,
      registerTeacher,
      loading,
      showLoader,
    } = this.props;
    return (
      <>
        <Row justify="center">
          <Col span={10}>
            <Title level={2}>Mentors</Title>
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
          </Col>
        </Row>
        <Row justify="center">
          <Col span={10} align="center">
            <h1>5.4 content</h1>
            {this.props.teachers.map(({ id, firstName, lastName, email, groupsAmount, studentsAmount }) => {
              return (
                <TeachersInformation
                  key={id}
                  id={id}
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  groupsAmount={groupsAmount}
                  studentsAmount={studentsAmount}
                />
              );
            })}
          </Col>
        </Row>
      </>
    );
  }
}

const mapStateToProps = ({ teachersReducer: { isRegistrationModalVisible, loading, teachers } }) => ({
  isRegistrationModalVisible,
  loading,
  teachers
});

const mapDispatchToProps = {
  hideTeacherRegisteredModal,
  registerTeacher,
  showTeacherRegisteredModal,
  showLoader,
  loadTeachers
};

export default connect(mapStateToProps, mapDispatchToProps)(TeachersPage);
