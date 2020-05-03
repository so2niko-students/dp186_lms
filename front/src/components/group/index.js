import React, {Component} from 'react';
import {Typography, List, Avatar} from 'antd';
import { Link } from 'react-router-dom';
import {EditOutlined} from '@ant-design/icons';
import CustomAvatar from '../avatar';
import {
    StyledListItem, StyledTitle, StyledP, StyledDivBtn, StyledBtn,
    StyledRow, GroupTitleP, DeleteStudentBtn, StyledListItemMeta, StyledStudentBlock,
    StyledTeachersBlock, EditGroupBtn, StyledColHeader, StyledList
} from './style';
import GroupEditForm from '../groupEditForm';

const { Title } = Typography;

class Group extends Component {
    state = {
      isEdit: false,
      groupName: 'GroupName',
      students: [
          {
              id: 1,
              avatar: 'https://res.cloudinary.com/lmsdp186/image/upload/v1588269845/owrnx4airzhhiua2yyqp.jpg',
              name: 'Lusia Gusivna',
              email: 'lusia@gmail.com',
          }
      ],
      mentor: [
          {
              id: 1,
              avatar: 'https://res.cloudinary.com/lmsdp186/image/upload/v1588269845/owrnx4airzhhiua2yyqp.jpg',
              name: 'Danila Hook',
              email: 'Danila@gmail.com',
          }
      ],
    };

    handleEditGroup = () =>{
        this.setState({isEdit: true});
    }

    render() {
        const { groupName, students, mentor, isEdit } = this.state;
        return (
            <>
                <StyledRow justify={'center'}>
                    <StyledColHeader span={8} align={'center'}>
                        {
                            !isEdit ?
                                <div>
                                    <CustomAvatar />
                                    <GroupTitleP>{groupName}</GroupTitleP>
                                    <EditGroupBtn type={'primary'} icon={<EditOutlined />} size={12} shape="circle" onClick={this.handleEditGroup}/>
                                </div>
                                :
                                <GroupEditForm groupName={groupName}></GroupEditForm>
                        }
                    </StyledColHeader>
                </StyledRow>
                <StyledRow justify={'space-around'}>
                    <StyledStudentBlock span={12} align={'center'}>
                        <Title level={3} >{'Students'}</Title>
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
                    </StyledStudentBlock>
                    <StyledTeachersBlock span={12} align={'center'}>
                        <Title level={3} >{'Mentor'}</Title>
                        <List
                            itemLayout={'horizontal'}
                            dataSource={mentor}
                            renderItem={item => (
                                <StyledListItem>
                                    <StyledListItemMeta
                                        avatar={<Avatar size={48} src={item.avatar} />}
                                        title={<StyledTitle>{item.name}</StyledTitle>}
                                        description={<StyledP align={'left'}>{item.email}</StyledP>}
                                    />
                                </StyledListItem>
                            )}
                        />
                        <StyledDivBtn>
                            <Link to={'/homeworks'}><StyledBtn type={'primary'}>Homework</StyledBtn></Link>
                            <StyledBtn type={'danger'}>Complete course</StyledBtn>
                        </StyledDivBtn>
                    </StyledTeachersBlock>
                </StyledRow>
            </>
        );
    }
}

export default Group;
