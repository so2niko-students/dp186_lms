import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { AddGroupButton, SiderStyle } from './styledListOfGroup';

const { Content } = Layout;


class GroupListPage extends Component {
    onHandleGroup = () => {

    }

    render() {
        return (
            <Layout>
                <SiderStyle width={200} className="site-layout-background">
                    <AddGroupButton type="primary"> Add group </AddGroupButton>
                    <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }} >
                        <Menu.Item key="1" onClick={this.onHandleGroup}>option1</Menu.Item>
                        <Menu.Item key="2">option2</Menu.Item>
                        <Menu.Item key="3">option3</Menu.Item>
                    </Menu>
                </SiderStyle>
                {/* <Layout style={{ padding: '0 24px 24px' }}>
                    <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                    >
                    Content
                    </Content>
                </Layout> */}
            </Layout>
        )
    }
}

// const mapStateToProps = state => ({
//     groups: state.groupsReducer.groups,
//     selectedGroup: state.groupsReducer.selectedGroup
//   });

//   const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators(Object.assign({}, selectGroup), dispatch)
//   });
  
  
//   export default connect(mapStateToProps, mapDispatchToProps)(GroupListPage);
export default GroupListPage;

