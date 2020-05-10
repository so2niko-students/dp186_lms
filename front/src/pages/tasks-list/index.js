import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    TaskTemplate,
    AddTaskButton,
    DeleteButton,
    GroupName,
    Page,
    CompletedRow,
    CheckOutlinedIcon,
    FormItem,
    TextOfTask,
    CheckedAndReady,
    LayoutStyle
} from './style';
import { Avatar, Row, Col, Typography, message, Pagination, Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import { DeleteTwoTone, EditFilled } from '@ant-design/icons';
import ListOfGroup from '../../containers/list-of-group';
import axios from 'axios';

const { Title, Text } = Typography;
const { TextArea } = Input;
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
};

class TasksList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            page: 1,
            total: 0,
            limit: 0,
            isChangingTitle: false,
            changingTitleId: 0,
            isChangingText: false,
            changingTextId: 0,
        };
        this.token = localStorage.getItem('token');
        this.user = JSON.parse(localStorage.getItem('user'));
        this.cancelChangingTask = this.cancelChangingTask.bind(this);
        this.handleChangePage = this.handleChangePage.bind(this);
    }

    deleteTask(id) {
        message.success('Task has been deleted');

        const url = `${process.env.REACT_APP_TASKS}/${id}`;
        const headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.token}`, } };

        this.setState((state, props) => ({
            tasks: state.tasks.filter((task) => task.id !== id)
        }))

        axios.delete(url, headers)
            .then(response => response);
    }

    cancelChangingTask() {
        this.setState({
            isChangingTitle: false,
            isChangingText: false,
        })
        message.error(`Task hasn't been changed`);
    }

    handleChangePage(value) {
        this.setState({
            page: value,
        });
        this.getTasks(value, this.props.currentGroup.id);
    };

    changeEditState(id, name) {
        if (name === 'description') {
            this.setState({
                isChangingText: true,
                changingTextId: id
            })
        }
        if (name === 'taskName') {
            this.setState({
                isChangingTitle: true,
                changingTitleId: id
            })
        }
    }

    onHandleChangeField(id, data) {
        message.success('Task has been saved');

        const url = `${process.env.REACT_APP_TASKS}/${id}`;
        const headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.token}`, } };

        axios.put(url, JSON.stringify(data), headers)
            .then(response => response)

        this.setState({
            isChangingTitle: false,
            isChangingText: false,
        })

        this.getTasks(this.state.page, this.props.currentGroup.id);
    }

    taskTemplate(task) {
        const { id, taskName, description, amountOfChecked, amountOfReady } = task;
        const { isChangingTitle, changingTitleId, isChangingText, changingTextId } = this.state;

        return (
            <TaskTemplate span={20} offset={2} key={id}>
                {this.user.hasOwnProperty('isAdmin') ?
                    <DeleteButton
                        title="Are you sure delete this task?"
                        onConfirm={this.deleteTask.bind(this, id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <a href="#"><DeleteTwoTone /></a>
                    </DeleteButton>
                    : <CompletedRow>
                        <CheckOutlinedIcon />
                        <Text>Completed</Text>
                    </CompletedRow>}
                <Col span={24}>
                    {isChangingTitle && changingTitleId === id ?
                        <Form {...layout} name='basic' initialValues={{ taskName: taskName }} onFinish={this.onHandleChangeField.bind(this, id)}>
                            <FormItem
                                name='taskName'
                                rules={[
                                    { required: true, message: 'Please input title!' },
                                ]}>
                                <Input placeholder='Title' />
                            </FormItem>
                            <FormItem>
                                <Button type='primary' htmlType='submit'>Save</Button>
                            </FormItem>
                            <FormItem>
                                <Button type='danger' onClick={this.cancelChangingTask}>Cancel</Button>
                            </FormItem>
                        </Form>
                        : <Row>
                            <Title level={3}>{taskName}</Title>
                            {this.user.hasOwnProperty('isAdmin') ? <EditFilled onClick={this.changeEditState.bind(this, id, 'taskName')} /> : null}
                        </Row>}
                </Col>
                <Col span={24}>
                    {isChangingText && changingTextId === id ?
                        <Form {...layout} name='basic' initialValues={{ description: description }} onFinish={this.onHandleChangeField.bind(this, id)}>
                            <FormItem style={{ width: '100%' }}
                                name='description'
                                rules={[
                                    { required: true, message: 'Please input title!' },
                                ]}>
                                <TextArea rows={4} />
                            </FormItem>
                            <FormItem>
                                <Button type='primary' htmlType='submit'>Save</Button>
                            </FormItem>
                            <FormItem>
                                <Button type='danger' onClick={this.cancelChangingTask}>Cancel</Button>
                            </FormItem>
                        </Form>
                        : <Row>
                            <TextOfTask>{description}</TextOfTask>
                            {this.user.hasOwnProperty('isAdmin') ? <EditFilled onClick={this.changeEditState.bind(this, id, 'description')} /> : null}
                        </Row>}
                </Col>
                <Col span={24}>
                    <CheckedAndReady>{amountOfChecked} is checked</CheckedAndReady>
                    <CheckedAndReady>{amountOfReady} is ready</CheckedAndReady>
                </Col>
            </TaskTemplate >
        )
    }

    getTasks = (page, groupId) => {
        const url = `${process.env.REACT_APP_TASKS}?page=${page}&limit=10&groupId=${groupId}`;
        const headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.token}`, } };

        axios.get(url, headers)
            .then(response => {
                console.log(response)
                this.setState({
                    tasks: response.data.data,
                    page: response.data.page,
                    total: response.data.total,
                    limit: response.data.limit,
                })
            })
    }

    componentWillReceiveProps(props) {
        this.getTasks(1, props.currentGroup.id)
    }

    render() {
        const { tasks, page, total, limit } = this.state;

        return (
            < LayoutStyle >
                <ListOfGroup />
                <Page>
                    <Col span={20} offset={2}>
                        {this.user.hasOwnProperty('isAdmin') ? <AddTaskButton type='primary'>Add Task</AddTaskButton> : null}
                        <Avatar size={64} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        <GroupName>{this.props.currentGroup.groupName ? this.props.currentGroup.groupName : null}</GroupName>
                    </Col>
                    <Col span={24}>
                        <Title align="center">Tasks</Title>
                        <Row>
                            {tasks &&
                                tasks.length > 0 &&
                                tasks.map((task) => this.taskTemplate(task))}
                        </Row>
                    </Col>
                    {total > 10 ?
                        <Pagination
                            defaultCurrent={page}
                            defaultPageSize={limit}
                            onChange={this.handleChangePage}
                            total={total}
                            style={{ margin: '20px auto' }}
                        /> : null}
                </Page>
            </ LayoutStyle>
        );
    }
}

const mapStateToProps = ({ groupList: { currentGroup } }) => ({ currentGroup });

export default connect(mapStateToProps)(TasksList);
