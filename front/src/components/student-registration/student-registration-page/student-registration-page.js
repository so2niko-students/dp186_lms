import React, { Component } from 'react';
import obj from '../../../common/redux/actions';
import { connect } from 'react-redux';
import { Modal, Row, Col } from 'antd';
import StudentRegistrationForm from '../student-registration-form';

class StudentRegistrationPage extends Component {
  constructor(props) {
    super(props);
    this.handleHideModal = this.handleHideModal.bind(this);
  }

  handleHideModal() {
    this.props.dispatch(obj.hideStudentRegisteredModal());
  }

  render() {
    const { errorMessage, isRegistered, isModalVisible, match, dispatch } = this.props;

    if (!isRegistered) {
      return (
        <>
          <StudentRegistrationForm
            token={match.params.token}
            dispatch={dispatch}
          />
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
}) => ({ errorMessage, isRegistered, isModalVisible });

export default connect(mapStateToProps)(StudentRegistrationPage);
