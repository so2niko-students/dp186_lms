import React, {Component} from 'react';
import { Layout } from 'antd';
import Group from '../../components/group';
import ListOfGroup from '../../containers/list-of-group'

class GroupsPage extends Component {
    state = {
        activeGroup: null,
        groupList: [],
    }
    render() {
        return (
            <>
                <Layout>
                    <ListOfGroup />
                    <Group />
                </Layout>
            </>
        );
    }
}

export default GroupsPage;
