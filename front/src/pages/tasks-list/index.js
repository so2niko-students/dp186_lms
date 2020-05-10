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
import { Avatar, Row, Col, Typography, message, Pagination, Form, Input, Button, Layout } from 'antd';
import 'antd/dist/antd.css';
import { DeleteTwoTone, EditFilled } from '@ant-design/icons';
import ListOfGroup from '../../containers/list-of-group';
import Spinner from '../../components/spinner'
import axios from 'axios';

const { Title, Text } = Typography;
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
};

class TasksList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // tasks: [
            //     {
            //         id: 1,
            //         title: 'Title 1',
            //         text: 'text 1',
            //         checked: 5,
            //         ready: 12
            //     },
            //     {
            //         id: 2,
            //         title: 'TITLE 2',
            //         text: 'text 2',
            //         checked: 5,
            //         ready: 12
            //     },
            //     {
            //         id: 3,
            //         title: 'TITLE 3',
            //         text: 'text 3',
            //         checked: 5,
            //         ready: 12
            //     },
            //     {
            //         id: 4,
            //         title: 'TITLE 4',
            //         text: 'text 4',
            //         checked: 5,
            //         ready: 12
            //     },
            //     {
            //         id: 5,
            //         title: 'TITLE 5',
            //         text: 'text 5',
            //         checked: 5,
            //         ready: 12
            //     },
            //     {
            //         id: 6,
            //         title: 'TITLE 6',
            //         text: 'text 6',
            //         checked: 5,
            //         ready: 12
            //     },
            //     {
            //         id: 7,
            //         title: 'TITLE 7',
            //         text: 'text 7',
            //         checked: 5,
            //         ready: 12
            //     },
            //     {
            //         id: 8,
            //         title: 'TITLE 8',
            //         text: 'text 8',
            //         checked: 5,
            //         ready: 12
            //     },
            //     {
            //         id: 9,
            //         title: 'TITLE 9',
            //         text: 'text 9',
            //         checked: 5,
            //         ready: 12
            //     },
            //     {
            //         id: 10,
            //         title: 'TITLE 10',
            //         text: 'text 10',
            //         checked: 5,
            //         ready: 12
            //     },
            //     {
            //         id: 11,
            //         title: 'TITLE 11',
            //         text: 'text 11',
            //         checked: 5,
            //         ready: 12
            //     },
            //     {
            //         id: 12,
            //         title: 'TITLE 12',
            //         text: 'text 12',
            //         checked: 5,
            //         ready: 12
            //     },
            //     {
            //         id: 13,
            //         title: 'TITLE 13',
            //         text: 'text 13',
            //         checked: 5,
            //         ready: 12
            //     },
            // ],
            tasks: [],
            minValue: 0,
            maxValue: 10,
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
        this.cancelChangingTitle = this.cancelChangingTitle.bind(this);
        this.cancelChangingText = this.cancelChangingText.bind(this);

    }

    deleteTask(id) {
        message.success('Task has been deleted');

        const url = `http://localhost:5000/tasks/${id}`;
        const headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.token}`, } };
        // console.log(id)
        // this.setState((state, props) => ({
        //     tasks: state.tasks.filter((task) => task.id !== id)
        // }))
        axios.delete(url, headers)
            .then(response => response);
    }

    cancelChangingTitle() {
        this.setState({
            isChangingTitle: false,
        })
        message.error(`Task hasn't been changed`);
    }

    cancelChangingText() {
        this.setState({
            isChangingText: false,
        })
        message.error(`Task hasn't been changed`);
    }

    handleChangePage = value => {
        this.setState({
            page: value,
        });
        this.getTasks(value, this.props.currentGroup.id);
    };

    changeTitleState(id) {
        console.log(id);
        this.setState({
            isChangingTitle: true,
            changingTitleId: id
        })
    }

    changeTextState(id) {
        this.setState({
            isChangingText: true,
            changingTextId: id
        })
    }

    onHandleChangeTitle(title) {
        console.log(title)
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
                        <Form {...layout} name='basic' initialValues={{ title: taskName }} onFinish={this.onHandleChangeTitle}>
                            <FormItem
                                name='title'
                                rules={[
                                    { required: true, message: 'Please input title!' },
                                ]}>
                                <Input placeholder='Title' />
                            </FormItem>
                            <FormItem>
                                <Button type='primary' htmlType='submit'>Save</Button>
                            </FormItem>
                            <FormItem>
                                <Button type='danger' onClick={this.cancelChangingTitle}>Cancel</Button>
                            </FormItem>
                        </Form>
                        : <Row>
                            <Title level={3}>{taskName}</Title>
                            {this.user.hasOwnProperty('isAdmin') ? <EditFilled onClick={this.changeTitleState.bind(this, id)} /> : null}
                        </Row>}
                </Col>
                <Col span={24}>
                    {isChangingText && changingTextId === id ?
                        <Form {...layout} name='basic' initialValues={{ text: description }} onFinish={this.onHandleChangeTitle}>
                            <FormItem
                                name='text'
                                rules={[
                                    { required: true, message: 'Please input title!' },
                                ]}>
                                <Input placeholder='Text' />
                            </FormItem>
                            <FormItem>
                                <Button type='primary' htmlType='submit'>Save</Button>
                            </FormItem>
                            <FormItem>
                                <Button type='danger' onClick={this.cancelChangingText}>Cancel</Button>
                            </FormItem>
                        </Form>
                        : <Row>
                            <TextOfTask>{description}</TextOfTask>
                            {this.user.hasOwnProperty('isAdmin') ? <EditFilled onClick={this.changeTextState.bind(this, id)} /> : null}
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
        const url = `http://localhost:5000/tasks?page=${page}&limit=10&groupId=${groupId}`;
        const headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.token}`, } };

        axios.get(url, headers)
            .then(response => {
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
                        /> : null}
                </Page>
            </ LayoutStyle>
        );
    }
}

const mapStateToProps = ({ groupList: { currentGroup } }) => ({ currentGroup });

export default connect(mapStateToProps)(TasksList);
