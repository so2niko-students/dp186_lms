import React, { Component } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import ChangePassword from '../../containers/modal-change-password';

class ChangePasswordButtons extends Component {
    constructor(props) {
        super(props);
        this.state = { modalVisible: false };
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    showModal = () => {
        this.setState({
            modalVisible: true,
        });
    };
    handleCancel = e => {
        this.setState({
            modalVisible: false,
        });
    };

    render() {
        return (
            <div>
                <Button type='primary' onClick={this.showModal}>Change password</Button>
                {this.user.hasOwnProperty('isAdmin') ?
                    <ChangePassword visible={this.state.modalVisible} handleCancel={this.handleCancel} user="teacher" />
                    : <ChangePassword visible={this.state.modalVisible} handleCancel={this.handleCancel} user="student" />
                }
            </div>
        )
    }
}

export default ChangePasswordButtons;