import React, { Component } from 'react';
import { StyledCol, SaveButton } from './style';
import { Modal, Form, Input, Typography, Row } from 'antd';
import { connect } from 'react-redux';
import { createGroup, hideModalCreateGroup } from '../../common/redux/groups/groups.action';
import { validateGroup } from '../../common/validators/group.validator';

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

    handleCancel = () => {
        const { hideModalCreateGroup } = this.props;
        hideModalCreateGroup();
    };

    handleCreateGroup (data) {
        this.props.createGroup(data);
        this.handleCancel();
    }

    render () {
        const { isCreateGroupModalVisible } = this.props;
        return (
            <div>
                <Modal
                    centered
                    visible={isCreateGroupModalVisible}
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
                                rules={[
                                    { required: true, message: 'Please enter name for the group!'},
                                    { validator: validateGroup }
                                ]}
                            >
                                <Input placeholder='Dp-Node-168' />
                            </Form.Item>
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

const mapStateToProps = ({ createGroup: { isCreateGroupModalVisible }}) => ({ isCreateGroupModalVisible })
const mapDispatchToProps = { createGroup, hideModalCreateGroup };

export default connect(mapStateToProps, mapDispatchToProps)(GroupCreationWindow);