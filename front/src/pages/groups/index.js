import React, {Component} from 'react';
import {Layout} from 'antd';
import Group from '../../components/group';
import ListOfGroup from '../../containers/list-of-group'

class GroupsPage extends Component {
    render() {
        return (
            <Layout style={{flexDirection: 'none'}}>
                <ListOfGroup />
                <Group />
            </Layout>
        );
    }
}

export default GroupsPage;
