import React, {Component} from 'react';
import {Form, Input, Button, Upload } from 'antd';
import { connect } from 'react-redux';
import { validateGroup } from '../../common/validators/group.validator';
import LoadingOutlined from '@ant-design/icons/es/icons/LoadingOutlined';
import PlusOutlined from '@ant-design/icons/es/icons/PlusOutlined';
import {changeUpdatingStatus, updateCurrentGroup} from '../../common/redux/groups/groups.action';

class GroupEditForm extends Component {
    state = {
        groupId: this.props.groupId,
        groupName: this.props.groupName,
        avatar: this.props.groupAvatar,
        loading: false,
    }

    handleUpdateGroup = (data) => {
        const { onHandleSwitchEditStatus, onHandleUpdateGroup, groupName: groupNameFromProps, groupAvatar: groupAvatarFromProps } = this.props;
        const {groupId, avatar, groupName } = this.state;
        if(groupNameFromProps === groupName && groupAvatarFromProps === avatar) {
            onHandleSwitchEditStatus();
            return false;
        }
        const reqBody = {id: groupId, groupName, avatar};
        onHandleUpdateGroup(reqBody);
    }

    handleChangeGroupName = (event) => {
        this.setState({groupName: event.target.value})
    }

    handleSelectImg = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.setState({avatar: {
                    img: reader.result.replace(`data:${file.type};base64,`, ''),
                    format: file.type,
                }
            });
        }
        return false;
    }

    render() {
        const { groupName, avatar } = this.state;

        const { onHandleSwitchEditStatus } = this.props;

        const uploadButton = (
            <div>
                {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        return (
            <div>
                <Form
                    initialValues={{
                        groupName,
                    }}
                    onFinish={this.handleUpdateGroup}
                >
                    <Form.Item
                        label={'Group avatar'}
                        name={'groupAvatar'}
                    >
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            accept={'.jpg, .jpeg, .png'}
                            showUploadList={false}
                            fileList={false}
                            beforeUpload={this.handleSelectImg}
                        >
                            {
                                avatar ? <img src={avatar.img ? `data:${avatar.format};base64,${avatar.img}` : avatar} alt="avatar" style={{ width: '100%' }} /> : uploadButton
                            }
                        </Upload>
                    </Form.Item>
                    <Form.Item
                        label={'Group name'}
                        name={'groupName'}
                        rules={[
                            {required: true, message: 'Please enter group name'},
                            {validator: validateGroup}
                        ]}
                    >
                        <Input name={'groupName'} onChange={this.handleChangeGroupName}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type={'primary'} htmlType={'submit'} style={{margin: '0 5px'}}>
                            Save
                        </Button>
                        <Button type={'danger'} style={{margin: '0 5px'}} onClick={onHandleSwitchEditStatus}>Cancel</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onHandleUpdateGroup: (data) => {
            return dispatch(updateCurrentGroup(data))
        },
        onHandleSwitchEditStatus: (data) => {
            return dispatch(changeUpdatingStatus(data))
        }
    }
}

export default connect(null, mapDispatchToProps)(GroupEditForm);