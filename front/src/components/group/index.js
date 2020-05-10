import React, {Component} from 'react';
import { Typography, List, Avatar, Layout, notification, Result, Modal, message } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { UserOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import Spinner from '../spinner';
import {
    StyledListItem, StyledTitle, StyledP, StyledDivBtn, StyledBtn,
    StyledRow, DeleteStudentBtn, StyledListItemMeta, StyledStudentBlock,
    StyledTeachersBlock, StyledColHeader, StyledList
} from './style';
import { deleteStudentFromGroup } from '../../common/redux/groups/groups.action';
import GroupHeader from './groupHeader';

const { Title } = Typography;
const { Content } = Layout;
const { confirm } = Modal;

class Group extends Component {
    state = {
        // If component throw error
        fatalError: false,
    };

    componentDidCatch(error, errorInfo) {
        this.setState({fatalError: true});
    }

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

    handleDeleteStudent = (studentId) => {
        const { deleteStudentFromGroup, currentGroup: { id: groupId } } = this.props;
        confirm({
            title: 'Are you sure delete this student?',
            icon: <ExclamationCircleOutlined />,
            content: 'This action cannot be undone!',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk: () => {
                deleteStudentFromGroup({studentId, groupId});
            }
        });
    }

    render() {
        const { fatalError } = this.state;
        const { currentGroup, role } = this.props;
        const { teacher, students } = currentGroup;

        if(fatalError){
            return (
                <Result
                    style={{width: '100%'}}
                    status={500}
                    title={'Something go wrong'}
                    subTitle={'Sorry, but now this page is broken :('}
                />
            )
        }

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
                                    {
                                        students ?
                                            <StyledList
                                                itemLayout={'horizontal'}
                                                dataSource={students}
                                                renderItem={item => (
                                                    <StyledListItem key={item.id}>
                                                        <StyledListItemMeta
                                                            avatar={
                                                                item.avatar ?
                                                                    <Avatar size={48} src={item.avatar.avatarLink} />
                                                                    :
                                                                    <Avatar size={48} icon={<UserOutlined />} />
                                                            }
                                                            title={<StyledTitle>{`${item.firstNameEng} ${item.lastNameEng}`}</StyledTitle>}
                                                            description={<StyledP align={'left'}>{item.email}</StyledP>}
                                                        />
                                                        {
                                                            role === 'mentor' || role === 'superAdmin' ?
                                                                <DeleteStudentBtn type={'danger'} key={item.id} onClick={()=>{this.handleDeleteStudent(item.id)}}>Delete</DeleteStudentBtn>
                                                                :
                                                                null

                                                        }
                                                    </StyledListItem>
                                                )}
                                            />
                                            :
                                            <div>
                                                <Spinner load={Spinner.loading()}/>
                                                <h2>Loading...</h2>
                                            </div>
                                    }
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

const mapStateToProps = ({ groups: { currentGroup, groupsError, isDeleting }, login: { userId, role } }) =>
    ({ currentGroup, userId, groupsError, isDeleting, role });

const mapDispatchToProps = { deleteStudentFromGroup };

export default connect(mapStateToProps, mapDispatchToProps)(Group);
