import React, {Component} from 'react';
import { Typography, List, Avatar, Layout, notification, message } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { UserOutlined } from '@ant-design/icons';
import Spinner from '../spinner';
import {
    StyledListItem, StyledTitle, StyledP, StyledDivBtn, StyledBtn,
    StyledRow, StyledListItemMeta, StyledStudentBlock,
    StyledTeachersBlock, StyledColHeader } from './style';
import GroupHeader from './groupHeader';
import GroupStudentsList from './groupStudentsList';

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
        const { teacher } = currentGroup;

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
                                    {
                                        teacher ?
                                            <List
                                                itemLayout={'horizontal'}
                                                dataSource={[teacher]}
                                                rowKey={'id'}
                                                renderItem={item => (
                                                    <StyledListItem>
                                                        <StyledListItemMeta
                                                            avatar={
                                                                item.avatar ?
                                                                    <Avatar size={48} src={item.avatar.avatarLink} />
                                                                    :
                                                                    <Avatar size={48} icon={<UserOutlined />} />
                                                            }
                                                            title={<StyledTitle>{`${item.firstName} ${item.lastName}`}</StyledTitle>}
                                                            description={<StyledP align={'left'}>{item.email}</StyledP>}
                                                        />
                                                    </StyledListItem>
                                                )}
                                            />
                                            :
                                            <div>
                                                <Spinner load={Spinner.loading()}/>
                                                <h2>Loading...</h2>
                                            </div>
                                    }
                                    <StyledDivBtn>
                                        <Link to={'/homeworks'}><StyledBtn type={'primary'}>Homework</StyledBtn></Link>
                                    </StyledDivBtn>
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
