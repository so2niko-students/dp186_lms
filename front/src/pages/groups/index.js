import React, {Component} from 'react';
import Group from '../../components/group';
import {Col, Row} from 'antd';

class GroupsPage extends Component {
    state = {
        activeGroup: null,
        groupList: [],
    }
    render() {
        return (
            <>
                <Row>
                    <Col span={4}>

                    </Col>
                    <Col span={20} align={'center'}>
                        <Group />
                    </Col>
                </Row>
            </>
        );
    }
}

export default GroupsPage;
