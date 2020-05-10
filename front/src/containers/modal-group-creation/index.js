import React, { Component } from 'react';
import { StyledCol, SaveButton, ErrorText } from './style';
import { Modal, Form, Input, Typography, Row } from 'antd';
import { connect } from 'react-redux';
import { createGroup } from '../../common/redux/groups/groups.action';


const { Title } = Typography;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16, },
};

class GroupCreationWindow extends Component {
    constructor(props){
        super(props);
        this.handleCreateGroup = this.handleCreateGroup.bind(this)
    }

    state = {
        visible: false,
        user: JSON.parse(localStorage.getItem('user'))
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    handleCreateGroup (data) {
        this.props.createGroup(data);
        this.handleCancel();    
    }

    render () {
        const { errorMessage } = this.props;
        const { user } = this.state;
        return (
            <div>
                {/* {user.isAdmin ? null :
               } */}
                <SaveButton type="primary" onClick={this.showModal}>
                Create group
                </SaveButton>
                <Modal
                    centered
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    okButtonProps={{ style: { display: 'none' } }}
                    cancelButtonProps={{ style: { display: 'none' } }}
                >
                    <Row>
                        <StyledCol span={24} >
                        <Title level={2} align="center">New group</Title>
                        <Form
                            {...layout}
                            name="basic"
                            onFinish={this.handleCreateGroup}
                        >
                            <Form.Item
                                align="center"
                                name="groupName"
                                rules={[{ required: true, message: 'Please enter name for the group!' }]}
                            >
                                <Input placeholder='Dp-Node-168' />
                            </Form.Item>
                            {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
                            <Form.Item 
                                
                                {...tailLayout}>
                                <SaveButton type="primary" size = "large" htmlType="submit">
                                    Save group
                                </SaveButton>
                            </Form.Item>
                        </Form>
                        </StyledCol>
                    </Row>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = ({ createGroupReducer: {isGroupCreated, errorMessage }}) => ({ isGroupCreated, errorMessage })
const mapDispatchToProps = { createGroup };

export default connect(mapStateToProps, mapDispatchToProps)(GroupCreationWindow);