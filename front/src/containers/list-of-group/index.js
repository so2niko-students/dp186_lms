import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import axios from 'axios';
import 'antd/dist/antd.css';
import { AddGroupButton, SiderStyle } from './style';
import { setCurrentGroup } from '../../common/redux/groups/groups.action';
import { connect } from 'react-redux';

let groupList;

class ListOfGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupList: null
        }
        this.onHandleGroup = this.onHandleGroup.bind(this);
        this.onHandleFirstGroup = this.onHandleFirstGroup.bind(this);
    }

    onHandleGroup(data) {
        this.props.setCurrentGroup(groupList.find((group) => group.id === +data.key))
    };

    onHandleFirstGroup(data) {
        this.props.setCurrentGroup(data)
    };

    componentDidMount() {
        const token = localStorage.getItem('token');
        // const userId = JSON.parse(localStorage.getItem('user')).id;
        const url = `${process.env.REACT_APP_GROUPS_BY_MENTOR}`;
        console.log(url)
        const headers = { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`, } };

        axios.get(url, headers)
            .then(response => {
                this.setState({ groupList: response.data })
                groupList = response.data; // for dispatch 
                this.onHandleFirstGroup(groupList[0])
            })
    }

    render() {
        return (
            <SiderStyle width={200} className="site-layout-background" >
                <AddGroupButton type="primary"> Add group </AddGroupButton>
                <Menu style={{ overflow: 'hidden', position: 'fixed', left: 0, height: '90%', borderRight: 0, width: 200 }} mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} >
                    {this.state.groupList ?
                        this.state.groupList.map(group => <Menu.Item key={group.id} onClick={this.onHandleGroup}>{group.groupName}</Menu.Item>)
                        : null}
                </Menu>
            </SiderStyle>
        )
    }
}

const mapStateToProps = ({ groupList: { currentGroup }, login: { userId } }) => ({ currentGroup, userId });

const mapDispatchToProps = {
    setCurrentGroup,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListOfGroup);
