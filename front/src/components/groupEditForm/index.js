import React, {Component} from 'react';
import {Form, Input, Button, Upload } from 'antd';
import { validateGroup } from '../../common/validators/group.validator';
import LoadingOutlined from '@ant-design/icons/es/icons/LoadingOutlined';
import PlusOutlined from '@ant-design/icons/es/icons/PlusOutlined';

class GroupEditForm extends Component {
    state = {
        groupName: this.props.groupName,
        file: null,
        loading: false,
    }

    handleUpdateGroup = (data) => {
        console.log(data)
    }

    handleSelectImg = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.setState({file: [reader.result]});
        }
        return false;
    }

    handleDeleteImg = (file) => {
        this.setState({file: null});
    }

    render() {
        const { groupName, file } = this.state;
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
                            onRemove={this.handleDeleteImg}
                            beforeUpload={this.handleSelectImg}
                        >
                            {file ? <img src={file} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
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
                        <Input name={'groupName'}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type={'primary'} htmlType={'submit'} style={{margin: '0 5px'}}>
                            Save
                        </Button>
                        <Button type={'danger'} style={{margin: '0 5px'}}>Cancel</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default GroupEditForm;