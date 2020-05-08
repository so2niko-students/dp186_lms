import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Pagination } from 'antd';
import { Button, Title, Col, ColPagination, SpinnerContainer } from './styles';
import TeachersRegistrationForm from '../teachers-registration-form';
import TeachersInformation from '../teachers-information';
import {
  hideTeacherRegisteredModal,
  registerTeacher,
  showTeacherRegisteredModal,
  showLoader,
  loadTeachers,
} from '../../../common/redux/teachers/teachers.actions';
import queryString from 'query-string'
import Spinner from '../../../components/spinner';

class TeachersPage extends Component {
  constructor(props) {
    super(props);
    this.loadData()
    this.handleChangePage = this.handleChangePage.bind(this);
    this.renderSpinnerOrContent = this.renderSpinnerOrContent.bind(this);
  }

  loadData() {
    this.props.showLoader()
    let querys = queryString.parse(this.props.location.search);
    const queryKeys = Object.keys(querys);
    const condition = queryKeys.length !== 1 || !queryKeys.includes('page');

    if(condition) {
      this.props.history.push('/teachers?page=1');
      querys = {
        page: 1,
      }
      this.props.loadTeachers(querys);
    } else {
      this.props.loadTeachers(querys);
    }
  }

  showModal = () => {
    const { showTeacherRegisteredModal } = this.props;
    showTeacherRegisteredModal();
  };

  handleChangePage(page, limit) {
    this.props.showLoader()
    this.props.history.push(`/teachers?page=${page}`);
    this.props.loadTeachers({page, limit})
  }

  renderSpinnerOrContent() {
    const { loading } = this.props;
    if (loading) {
      return (
        <SpinnerContainer>
          <Spinner load={Spinner.loading()} />;
        </SpinnerContainer>
      ) 
    } else {
      return (
        this.props.teachers.map(({ id, firstName, lastName, email, groupsCount, studentsCount }) => {
          return (
            <TeachersInformation
              key={id}
              id={id}
              firstName={firstName}
              lastName={lastName}
              email={email}
              groupsAmount={groupsCount}
              studentsAmount={studentsCount}
            />
          );
        })
      );
    }
  }

  render() {
    const {
      isRegistrationModalVisible,
      hideTeacherRegisteredModal,
      registerTeacher,
      loading,
      showLoader,
      total,
      currentPage
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
            {this.renderSpinnerOrContent()}
            {/* {this.props.teachers.map(({ id, firstName, lastName, email, groupsCount, studentsCount }) => {
              return (
                <TeachersInformation
                  key={id}
                  id={id}
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  groupsAmount={groupsCount}
                  studentsAmount={studentsCount}
                />
              );
            })} */}
          </Col>
        </Row>
        <Row justify="center">
          <ColPagination align="center">
            <Pagination justify="center" onChange={this.handleChangePage} defaultCurrent={1} current={currentPage} total={total} />
          </ColPagination>
        </Row>

      </>
    );
  }
}

const mapStateToProps = ({ teachersReducer: { isRegistrationModalVisible, loading, teachers, total, currentPage } }) => ({
  isRegistrationModalVisible,
  loading,
  teachers,
  total,
  currentPage
});

const mapDispatchToProps = {
  hideTeacherRegisteredModal,
  registerTeacher,
  showTeacherRegisteredModal,
  showLoader,
  loadTeachers
};

export default connect(mapStateToProps, mapDispatchToProps)(TeachersPage);
