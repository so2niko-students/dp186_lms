import React, { Component } from 'react';
import { TaskTemplate, AddTaskButton, DeleteButton, GroupName, Page, CompletedRow, CheckOutlinedIcon, FormItem } from './style';
import { Avatar, Row, Col, Typography, message, Pagination, Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import { DeleteTwoTone, EditFilled } from '@ant-design/icons';

const { Title, Text } = Typography;
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
};

class TasksList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {
                    id: 1,
                    title: 'TITLE 1',
                    text: 'text 1',
                    checked: 5,
                    ready: 12
                },
                {
                    id: 2,
                    title: 'TITLE 2',
                    text: 'text 2',
                    checked: 5,
                    ready: 12
                },
                {
                    id: 3,
                    title: 'TITLE 3',
                    text: 'text 3',
                    checked: 5,
                    ready: 12
                },
                {
                    id: 4,
                    title: 'TITLE 4',
                    text: 'text 4',
                    checked: 5,
                    ready: 12
                },
                {
                    id: 5,
                    title: 'TITLE 5',
                    text: 'text 5',
                    checked: 5,
                    ready: 12
                },
                {
                    id: 6,
                    title: 'TITLE 6',
                    text: 'text 6',
                    checked: 5,
                    ready: 12
                },
                {
                    id: 7,
                    title: 'TITLE 7',
                    text: 'text 7',
                    checked: 5,
                    ready: 12
                },
                {
                    id: 8,
                    title: 'TITLE 8',
                    text: 'text 8',
                    checked: 5,
                    ready: 12
                },
                {
                    id: 9,
                    title: 'TITLE 9',
                    text: 'text 9',
                    checked: 5,
                    ready: 12
                },
                {
                    id: 10,
                    title: 'TITLE 10',
                    text: 'text 10',
                    checked: 5,
                    ready: 12
                },
                {
                    id: 11,
                    title: 'TITLE 11',
                    text: 'text 11',
                    checked: 5,
                    ready: 12
                },
                {
                    id: 12,
                    title: 'TITLE 12',
                    text: 'text 12',
                    checked: 5,
                    ready: 12
                },
                {
                    id: 13,
                    title: 'TITLE 13',
                    text: 'text 13',
                    checked: 5,
                    ready: 12
                },
            ],
            minValue: 0,
            maxValue: 10,
            isChangingTitle: false,
            changingTitleId: 0,
            isChangingText: false,
            changingTextId: 0,
        };
        this.cancelChangingTitle = this.cancelChangingTitle.bind(this);
        this.cancelChangingText = this.cancelChangingText.bind(this);
    }

    confirm(id) {
        console.log(id)
        message.success('Task has been deleted');
        this.setState((state, props) => ({
            tasks: state.tasks.filter((task) => task.id !== id)
        }))
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
        if (value <= 1) {
            this.setState({
                minValue: 0,
                maxValue: 10
            });
        } else {
            this.setState({
                minValue: this.state.maxValue,
                maxValue: value * 10
            });
        }
    };

    changeTitleState(id) {
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

    taskTemplate(id, title, text, checked, ready) {
        const { isChangingTitle, changingTitleId, isChangingText, changingTextId } = this.state;
        return (
            <TaskTemplate span={20} offset={2} key={id}>
                <DeleteButton
                    title="Are you sure delete this task?"
                    onConfirm={this.confirm.bind(this, id)}
                    okText="Yes"
                    cancelText="No"
                >
                    <a href="#"><DeleteTwoTone /></a>
                </DeleteButton>
                <Col span={24}>
                    {isChangingTitle && changingTitleId === id ?
                        <Form {...layout} name='basic' initialValues={{ title: title }} onFinish={this.onHandleChangeTitle}>
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
                            <Text>{title}</Text>
                            <EditFilled onClick={this.changeTitleState.bind(this, id)} />
                        </Row>}


                    {/* <CompletedRow>
                        <CheckOutlinedIcon />
                        <Text>Completed</Text>
                    </CompletedRow> */}

                </Col>
                <Col span={24}>
                    {isChangingText && changingTextId === id ?
                        <Form {...layout} name='basic' initialValues={{ text: text }} onFinish={this.onHandleChangeTitle}>
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
                            <Text>{text}</Text>
                            <EditFilled onClick={this.changeTextState.bind(this, id)} />
                        </Row>}
                    {/* <Text>{text}</Text>
                    <EditFilled /> */}
                </Col>
                <Col span={24}>
                    <Text>{checked} is checked</Text>
                    <Text>{ready} is ready</Text>
                </Col>
            </TaskTemplate >
        )
    }

    render() {
        const { tasks } = this.state;
        return (
            <Page>
                <Col span={20} offset={2}>
                    <AddTaskButton type='primary'>Add Task</AddTaskButton>
                    <Avatar size={64} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    <GroupName>Group name</GroupName>
                </Col>
                <Col span={24}>
                    <Title align="center">Tasks</Title>
                    <Row>
                        {tasks &&
                            tasks.length > 0 &&
                            tasks.slice(this.state.minValue, this.state.maxValue).map(({ id, title, text, checked, ready }) => this.taskTemplate(id, title, text, checked, ready))}
                    </Row>
                </Col>
                <Pagination
                    defaultCurrent={1}
                    defaultPageSize={10}
                    onChange={this.handleChangePage}
                    total={13}
                />
            </Page>
        );
    }
}

export default TasksList;
