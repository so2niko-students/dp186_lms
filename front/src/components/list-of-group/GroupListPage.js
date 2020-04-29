// add to app for checking
// import GroupListPage from '../list-of-group';
// const groups = [
//     {id: 1, name: "group 1" },
//     {id: 2, name: "group 2" },
// ]
// <GroupListPage groups={groups} />;

import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { AddGroupButton, SiderStyle } from './styledListOfGroup';
import { setCurrentGroup } from '../../common/redux/actions/groupListAction';
import { connect } from 'react-redux';

const { Content } = Layout;

class GroupListPage extends Component {
    onHandleGroup = (data) => {
        this.props.dispatch(setCurrentGroup(data));
    }

    render() {
        console.log(this.props)
        return (
            <Layout>
                <SiderStyle width={200} className="site-layout-background">
                    <AddGroupButton type="primary"> Add group </AddGroupButton>
                    <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }} >
                    {this.props.groups.map(group => <Menu.Item key={group.id} onClick={this.onHandleGroup}>{group.name}</Menu.Item>)}
                    </Menu>
                </SiderStyle>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                    >
                    {this.props.groupList.currentGroup}
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

const mapDispatchToProps = dispatch => dispatch;

export default connect( mapDispatchToProps)(GroupListPage);
