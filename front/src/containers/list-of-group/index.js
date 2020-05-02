import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { AddGroupButton, SiderStyle } from './style';
import { setCurrentGroup } from '../../common/redux/groups/groups.action';
import { connect } from 'react-redux';

// const { Content } = Layout;

class GroupListPage extends Component {
    render() {
        console.log(this.props)
        return (
            <Layout>
                <SiderStyle width={200} className="site-layout-background" >
                    <AddGroupButton type="primary"> Add group </AddGroupButton>
                    <Menu style={{ overflow: 'auto', position: 'fixed', left: 0, height: '90%', borderRight: 0, width: 200 }} mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} >
                        {this.props.groups.map(group => <Menu.Item key={group.id} onClick={this.props.onHandleGroup}>{group.name}</Menu.Item>)}
                    </Menu>
                </SiderStyle>
                {/* <Layout style={{ padding: '0 24px 24px' }}>
                    <Content className="site-layout-background" style={{ padding: 24, margin: 0, minHeight: 280, }} >
                        {this.props.currentGroup}
                    </Content>
                </Layout> */}
            </Layout>
        )
    }
}

const mapStateToProps = ({ groupList: { currentGroup } }) => ({ currentGroup });

const mapDispatchToProps = (dispatch) => {
    return {
        onHandleGroup: (data) => dispatch(setCurrentGroup(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupListPage);
