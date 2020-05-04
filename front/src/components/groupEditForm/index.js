import React, {Component} from 'react';
import {Form, Input, Button, Upload } from 'antd';
import { validateGroup } from '../../common/validators/group.validator';

class GroupEditForm extends Component {
    state = {
        groupName: this.props.groupName,
    }

    handleUpdateGroup = (data) =>{
        console.log(data)
    }

    render() {
        const { groupName } = this.state;
        return (
            <div>
                <Form
                    initialValues={{
                        groupName,
                    }}
                    onFinish={this.handleUpdateGroup}
                >
                    <Form.Item
                        name={'groupAvatar'}
                    >

                    </Form.Item>
                    <Form.Item
                        label={'Group Name'}
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