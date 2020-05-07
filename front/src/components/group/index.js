import React, {Component} from 'react';
import {Typography, List, Avatar, Layout } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {EditOutlined} from '@ant-design/icons';
import Spinner from '../spinner';
import CustomAvatar from '../avatar';
import {
    StyledListItem, StyledTitle, StyledP, StyledDivBtn, StyledBtn,
    StyledRow, GroupTitleP, DeleteStudentBtn, StyledListItemMeta, StyledStudentBlock,
    StyledTeachersBlock, EditGroupBtn, StyledColHeader, StyledList
} from './style';
import GroupEditForm from '../groupEditForm';
import { changeUpdatingStatus } from '../../common/redux/groups/groups.action';

const { Title } = Typography;
const { Content } = Layout;

class Group extends Component {
    state = {
      students: [
          {
              id: 1,
              avatar: 'https://res.cloudinary.com/lmsdp186/image/upload/v1588269845/owrnx4airzhhiua2yyqp.jpg',
              name: 'Lusia Gusivna',
              email: 'lusia@gmail.com',
          }
      ],

    };

    render() {
        const { students } = this.state;
        console.log(this.props)
        const { currentGroup: { groupName, avatar, id, teacher }, onHandleSwitchEditStatus, isGroupEdited } = this.props;
        return (
            <Layout style={{backgroundColor: '#e6f7ff', minHeight: '100vh', height: 'auto'}}>
                {
                    this.props.currentGroup.groupName ?
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
                                                <GroupTitleP>{this.props.currentGroup.groupName}</GroupTitleP>
                                                <EditGroupBtn type={'primary'} icon={<EditOutlined />} size={12} shape="circle" onClick={onHandleSwitchEditStatus}/>
                                            </div>
                                            :
                                            <GroupEditForm groupName={groupName} groupAvatar={avatar.avatarLink} groupId={id}></GroupEditForm>
                                    }
                                </StyledColHeader>
                            </StyledRow>
                            <StyledRow justify={'space-around'}>
                                <StyledStudentBlock span={12} align={'center'}>
                                    <Title level={3} >{'Students'}</Title>
                                    {
                                        students ?
                                            <StyledList
                                                itemLayout={'horizontal'}
                                                dataSource={students}
                                                renderItem={item => (
                                                    <StyledListItem key={item.id}>
                                                        <StyledListItemMeta
                                                            avatar={<Avatar size={48} src={item.avatar} />}
                                                            title={<StyledTitle>{item.name}</StyledTitle>}
                                                            description={<StyledP align={'left'}>{item.email}</StyledP>}
                                                        />
                                                        <DeleteStudentBtn type={'danger'} key={item.id}>Delete</DeleteStudentBtn>
                                                    </StyledListItem>
                                                )}
                                            />
                                            :
                                            <p>Loading error</p>
                                    }
                                </StyledStudentBlock>
                                <StyledTeachersBlock span={12} align={'center'}>
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
                                                            avatar={<Avatar size={48} src={item.avatar.avatarLink} />}
                                                            title={<StyledTitle>{`${item.firstName} ${item.lastName}`}</StyledTitle>}
                                                            description={<StyledP align={'left'}>{item.email}</StyledP>}
                                                        />
                                                    </StyledListItem>
                                                )}
                                            />
                                            :
                                            <p>Loading error</p>
                                    }
                                    <StyledDivBtn>
                                        <Link to={'/homeworks'}><StyledBtn type={'primary'}>Homework</StyledBtn></Link>
                                        <StyledBtn type={'danger'}>Complete course</StyledBtn>
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

const mapStateToProps = ({ groupList: { currentGroup, isGroupEdited }, login: { userId } }) => ({ currentGroup, userId, isGroupEdited });
const mapDispatchToProps = (dispatch) => {
    return{
        onHandleSwitchEditStatus: (data) =>{
            return dispatch(changeUpdatingStatus(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Group);
