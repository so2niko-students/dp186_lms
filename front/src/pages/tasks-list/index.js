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
            isChangingTitle: false,
            changingTitleId: 0,
            isChangingText: false,
            changingTextId: 0,
            currentGroup: 0,
        };
        this.user = JSON.parse(localStorage.getItem('user'));
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
                {this.user.hasOwnProperty('isAdmin') ?
                    <DeleteButton
                        title="Are you sure delete this task?"
                        onConfirm={this.confirm.bind(this, id)}
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
                            <Title level={3}>{title}</Title>
                            {this.user.hasOwnProperty('isAdmin') ? <EditFilled onClick={this.changeTitleState.bind(this, id)} /> : null}
                        </Row>}
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
                            <TextOfTask>{text}</TextOfTask>
                            {this.user.hasOwnProperty('isAdmin') ? <EditFilled onClick={this.changeTextState.bind(this, id)} /> : null}
                        </Row>}
                </Col>
                <Col span={24}>
                    <CheckedAndReady>{checked} is checked</CheckedAndReady>
                    <CheckedAndReady>{ready} is ready</CheckedAndReady>
                </Col>
            </TaskTemplate >
        )
    }

    componentDidUpdate() {
        if (this.state.currentGroup !== this.props.currentGroup.id) {
            this.setState({ currentGroup: this.props.currentGroup.id })
            this.getTasks()
        }
    }

    getTasks = () => {
        if (this.props.currentGroup.id) {

            const token = localStorage.getItem('token');
            // // const userId = JSON.parse(localStorage.getItem('user')).id;
            // // console.log(this.props.currentGroup)
            const url = `http://localhost:5000/tasks?page=1&limit=10&groupId=${this.state.currentGroup}`;
            const headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`, } };
            console.log(this.state.currentGroup)
            axios.get(url, headers)
                .then(response => {
                    this.setState({ tasks: response.data })
                })
        }

    }



    render() {
        const { tasks } = this.state;
        // console.log(this.state.tasks)
        console.log(this.props)

        return (
            < LayoutStyle >
                <ListOfGroup />
                <Page>
                    <Col span={20} offset={2}>
                        {/* {this.user.hasOwnProperty('isAdmin') ? <AddTaskButton type='primary'>Add Task</AddTaskButton> : null} */}
                        <Avatar size={64} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        <GroupName>{this.props.currentGroup.groupName ? this.props.currentGroup.groupName : null}</GroupName>
                    </Col>
                    <Col span={24}>
                        <Title align="center">Tasks</Title>
                        <Row>
                            {tasks &&
                                tasks.length > 0 &&
                                // tasks.slice(this.state.minValue, this.state.maxValue.map(({ id, taskName, description, amountOfChecked, amoun)tOfReady }) => this.taskTemplate(id, taskName, description, amountOfChecked, amountOfReady))}
                                tasks.map(({ id, taskName, description, amountOfChecked, amountOfReady }) => this.taskTemplate(id, taskName, description, amountOfChecked, amountOfReady))}
                        </Row>
                    </Col>
                    <Pagination
                        defaultCurrent={1}
                        defaultPageSize={10}
                        onChange={this.handleChangePage}
                        total={13}
                    />
                </Page>
            </ LayoutStyle>
        );
    }
}

const mapStateToProps = ({ groupList: { currentGroup } }) => ({ currentGroup });
export default connect(mapStateToProps)(TasksList);
