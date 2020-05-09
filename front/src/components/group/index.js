import React, {Component} from 'react';
import {Typography, List, Avatar, Layout, notification, Result, Modal, message } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {EditOutlined, UserOutlined, ExclamationCircleOutlined} from '@ant-design/icons';
import Spinner from '../spinner';
import CustomAvatar from '../avatar';
import {
    StyledListItem, StyledTitle, StyledP, StyledDivBtn, StyledBtn,
    StyledRow, GroupTitleP, DeleteStudentBtn, StyledListItemMeta, StyledStudentBlock,
    StyledTeachersBlock, EditGroupBtn, StyledColHeader, StyledList
} from './style';
import GroupEditForm from '../groupEditForm';
import { changeUpdatingStatus, deleteStudentFromGroup } from '../../common/redux/groups/groups.action';
import { checkUserStatus } from '../../common/functions';

const { Title } = Typography;
const { Content } = Layout;
const { confirm } = Modal;

class Group extends Component {
    constructor(props){
        super(props);
        this.state = {
            role: checkUserStatus(),
            fatalError: false,
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({fatalError: true});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { groupsError, isDeleting } = this.props;
        if(groupsError && prevProps.groupsError !== groupsError) {
            this.handleErrorNotification(groupsError)
        }
        if(isDeleting && prevProps.isDeleting !== isDeleting) {
            message.loading({ content: 'Loading...', key: 'delNotify' })
        }
        if(!isDeleting && prevProps.isDeleting) {
            message.success({ content: 'Deleted!', key: 'delNotify', duration: 2});
        }
    }

    handleErrorNotification = (error) => {
        notification['error']({
            message: 'Something went wrong',
            description: `${error}`,
            getContainer: () => document.body,
        });
    }

    handleDeleteStudent = (studentId) => {
        const { onHandleDeleteStudent, currentGroup: { id: groupId } } = this.props;
        confirm({
            title: 'Are you sure delete this student?',
            icon: <ExclamationCircleOutlined />,
            content: 'This action cannot be undone!',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk: () => {
                onHandleDeleteStudent({studentId, groupId});
            }
        });
    }

    render() {
        const { role, fatalError } = this.state;
        const { onHandleSwitchEditStatus, isGroupEdited, currentGroup } = this.props;
        const { groupName, avatar, id, teacher, students } = currentGroup;

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
                                    {
                                        !isGroupEdited ?
                                            <div>
                                                {
                                                    avatar?
                                                    <CustomAvatar avatar={avatar.avatarLink} />
                                                    :
                                                    <CustomAvatar avatar={false} />
                                                }
                                                <GroupTitleP>{currentGroup.groupName}</GroupTitleP>
                                                {
                                                    role === 'mentor' || role === 'superAdmin' ?
                                                        <EditGroupBtn type={'primary'} icon={<EditOutlined />} size={12} shape="circle" onClick={onHandleSwitchEditStatus}/>
                                                        :
                                                        null
                                                }
                                            </div>
                                            :
                                            <GroupEditForm groupName={groupName} groupAvatar={avatar ? avatar.avatarLink : false} groupId={id}></GroupEditForm>
                                    }
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

const mapStateToProps = ({ groups: { currentGroup, isGroupEdited, groupsError, isDeleting }, login: { userId } }) =>
    ({ currentGroup, userId, isGroupEdited, groupsError, isDeleting });
const mapDispatchToProps = (dispatch) => {
    return{
        onHandleSwitchEditStatus: (data) => {
            return dispatch(changeUpdatingStatus(data));
        },
        onHandleDeleteStudent: (data) => {
            return dispatch(deleteStudentFromGroup(data));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Group);
