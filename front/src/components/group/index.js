import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Typography, Layout, notification, message } from 'antd';
import GroupHeader from './groupHeader';
import GroupStudentsList from './groupStudentsList';
import GroupMentorList from './groupMentorList';
import Spinner from '../spinner';
import { StyledRow, StyledStudentBlock, StyledTeachersBlock, StyledColHeader } from './style';

const { Title } = Typography;
const { Content } = Layout;

class Group extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { groupsError, isDeleting } = this.props;
        if(groupsError && prevProps.groupsError !== groupsError) {
            this.handleErrorNotification(groupsError)
        }
        if(isDeleting && prevProps.isDeleting !== isDeleting) {
            message.loading({ content: 'Deleting ...', key: 'delNotify' })
        }
        if(!isDeleting && prevProps.isDeleting) {
            message.success({ content: 'Deleted!', key: 'delNotify', duration: 2});
        }
    }

    handleErrorNotification = (error) => {
        notification.error({
            message: 'Something went wrong',
            description: error.toString(),
            getContainer: () => document.body,
        });
    }

    render() {
        const { currentGroup } = this.props;

        return (
            <Layout style={{backgroundColor: '#e6f7ff', minHeight: '100vh', height: 'auto'}}>
                {
                    currentGroup.groupName ?
                        <Content>
                            <StyledRow justify={'center'}>
                                <StyledColHeader span={8} align={'center'}>
                                    <GroupHeader />
                                </StyledColHeader>
                            </StyledRow>
                            <StyledRow justify={'space-around'}>
                                <StyledStudentBlock xl={{span: 12}} span={24} align={'center'}>
                                    <Title level={3} >{'Students'}</Title>
                                    <GroupStudentsList />
                                </StyledStudentBlock>
                                <StyledTeachersBlock xl={{span: 12}} span={24} align={'center'}>
                                    <Title level={3} >{'Mentor'}</Title>
                                    <GroupMentorList />
                                </StyledTeachersBlock>
                            </StyledRow>
                        </Content>
                        :
                        <Content style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column'}}>
                            <Spinner load={Spinner.loading()}/>
                            <h2>Loading...</h2>
                        </Content>
                }
            </Layout>
        );
    }
}

const mapStateToProps = ({ groups: { currentGroup, groupsError, isDeleting }, login: { userId } }) =>
    ({ currentGroup, userId, groupsError, isDeleting });

export default connect(mapStateToProps, null)(Group);
