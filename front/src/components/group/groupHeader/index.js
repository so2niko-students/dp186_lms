import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Button, Form, Upload } from 'antd';
import {EditOutlined, LoadingOutlined, PlusOutlined} from '@ant-design/icons';
import CustomAvatar from '../../avatar';
import { Spinner } from '../../spinner/Spinner';
import { GroupTitle, EditGroupBtn, StyledForm, StyledInput } from './style';
import { changeUpdatingStatus, startUpdatingGroupData, updateCurrentGroup } from '../../../common/redux/groups/groups.action';
import { validateGroup } from '../../../common/validators/group.validator';
import { MENTOR, SUPERADMIN } from '../../../common/functions/get-user-type';

class GroupHeader extends Component {

    state={
        groupId: this.props.currentGroup.id,
        groupName: this.props.currentGroup.groupName,
        avatar: this.props.currentGroup.avatar,
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if((this.props.currentGroup && !prevProps.currentGroup) || ( prevProps.currentGroup && this.props.currentGroup && prevProps.currentGroup.id !== this.props.currentGroup.id)) {
            this.setState({
                groupId: this.props.currentGroup.id,
                groupName: this.props.currentGroup.groupName,
                avatar: this.props.currentGroup.avatar,
            })
        }
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

    handleChangeGroupName = (event) => {
        this.setState({groupName: event.target.value})
    }

    handleUpdateGroup = () => {
        const { changeUpdatingStatus, updateCurrentGroup, startUpdatingGroupData,
            currentGroup: { groupName: groupNameFromProps, avatar: groupAvatarFromProps }  } = this.props;
        const { groupId, groupName, avatar } = this.state;
        if(groupNameFromProps === groupName && groupAvatarFromProps === avatar) {
            changeUpdatingStatus();
            return false;
        }
        startUpdatingGroupData();
        const reqBody = {id: groupId, groupName, avatar};
        updateCurrentGroup(reqBody);
    }

    render() {
        const { currentGroup: { avatar: avatarWithLink, groupName: groupNameFromProps }, isGroupEdited, isUpdating: loading,  role, changeUpdatingStatus } = this.props;
        const { groupName, avatar } = this.state;

        const uploadButton = (
            <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        if (isGroupEdited) {
            return (
                <div>
                    {
                        loading ?
                            <div>
                                <Spinner load={Spinner.loading()} />
                                <h2>Loading...</h2>
                            </div>
                            :
                            <Form
                                initialValues={{
                                    groupName,
                                }}
                                onFinish={this.handleUpdateGroup}
                            >
                                <StyledForm
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
                                            avatar ? <img src={avatar.img ? `data:${avatar.format};base64,${avatar.img}` : avatar.avatarLink} alt="avatar" style={{ width: '100%' }} /> : uploadButton
                                        }
                                    </Upload>
                                </StyledForm>
                                <Form.Item
                                    name={'groupName'}
                                    rules={[
                                        {required: true, message: 'Please enter group name'},
                                        {validator: validateGroup}
                                    ]}
                                >
                                    <StyledInput name={'groupName'} onChange={this.handleChangeGroupName}/>
                                </Form.Item>
                                <Form.Item>
                                    <Button type={'primary'} htmlType={'submit'} style={{margin: '0 5px'}}>
                                        Save
                                    </Button>
                                    <Button type={'danger'} style={{margin: '0 5px'}} onClick={changeUpdatingStatus}>Cancel</Button>
                                </Form.Item>
                            </Form>
                    }
                </div>
            )
        }

        return (
            <div>
                <CustomAvatar avatar={avatarWithLink ? avatarWithLink.avatarLink : null} />
                <GroupTitle>{groupNameFromProps}</GroupTitle>
                {
                    role === MENTOR || role === SUPERADMIN ?
                        <EditGroupBtn type={'primary'} icon={<EditOutlined/>} size={12} shape={'circle'} onClick={changeUpdatingStatus}/>
                        : null
                }
            </div>
        );
    }
}

const mapStateToProps = ({ groups: { currentGroup, isGroupEdited, isUpdating }, login: { role } }) => ({ currentGroup, isGroupEdited, isUpdating, role });
const mapDispatchToProps = { changeUpdatingStatus, updateCurrentGroup, startUpdatingGroupData };

export default connect(mapStateToProps, mapDispatchToProps)(GroupHeader);