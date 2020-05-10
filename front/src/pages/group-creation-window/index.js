import React, { Component } from 'react';
import { StyledCol, SaveButton } from './style';
import { Form, Input, Typography, Row } from 'antd';
import { connect } from 'react-redux';
import {checkExistGroupAction} from '../../common/redux/groups/group.action';


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
        this.createNewGroupTemplate = this.createNewGroupTemplate.bind(this)
    }
    createNewGroupTemplate(){
        return (
            <Row>
            <StyledCol span={8} offset={8}>
            <Title level={2} align="center">New group</Title>
                <Form
                    {...layout}
                    name="basic"
                    onFinish={this.props.onHandleGroupCreation}
                >
                    <Form.Item
                        align="center"
                        name="name"
                        rules={[{ required: true, message: 'Please enter name for the group!' }]}
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
        )
    }
    
    render() {
        const {isGroupExisted} = this.props;
        if(!isGroupExisted){
            return (
                    <div>                       
                        {this.createNewGroupTemplate()}
                    </div>
                )
        } else {
            return (
                <div>
                    <h1>Group is existed</h1>
                </div>
            )
        }
    }
}

const mapStateToProps = ({createGroupReducer: {isGroupExisted}}) => ({isGroupExisted})

const mapDispatchToProps = (dispatch) => {
    return {
      onHandleGroupCreation: (data) => dispatch(checkExistGroupAction(data))
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(GroupCreationWindow);