import React, {Component} from 'react';
import { Form, Button, Upload } from 'antd';
import { connect } from 'react-redux';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import { validateGroup } from '../../common/validators/group.validator';
import { changeUpdatingStatus, updateCurrentGroup, startUpdatingGroupData } from '../../common/redux/groups/groups.action';
import { Spinner } from '../spinner/Spinner';
import { StyledForm, StyledInput } from './style';

class GroupEditForm extends Component {
    state = {
        groupId: this.props.groupId,
        groupName: this.props.groupName,
        avatar: this.props.groupAvatar,
    }

    handleUpdateGroup = (data) => {
        const { changeUpdatingStatus, updateCurrentGroup, startUpdatingGroupData,
            groupName: groupNameFromProps, groupAvatar: groupAvatarFromProps } = this.props;
        const { groupId, avatar, groupName } = this.state;
        if(groupNameFromProps === groupName && groupAvatarFromProps === avatar) {
            changeUpdatingStatus();
            return false;
        }
        startUpdatingGroupData();
        const reqBody = {id: groupId, groupName, avatar};
        updateCurrentGroup(reqBody);
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

        const { changeUpdatingStatus, isUpdating: loading } = this.props;

        const uploadButton = (
            <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div className="ant-upload-text">Upload</div>
            </div>
        );

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
                                        avatar ? <img src={avatar.img ? `data:${avatar.format};base64,${avatar.img}` : avatar} alt="avatar" style={{ width: '100%' }} /> : uploadButton
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
        );
    }
}


const mapDispatchToProps = {
    updateCurrentGroup,
    changeUpdatingStatus,
    startUpdatingGroupData,
}

const mapStateToProps = ({ groups: { isUpdating } }) => ({ isUpdating });

export default connect(mapStateToProps, mapDispatchToProps)(GroupEditForm);