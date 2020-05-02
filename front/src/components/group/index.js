import React, {Component} from 'react';
import { Col, Typography, List, Avatar } from 'antd';
import CustomAvatar from '../avatar';
import {StyledListItem, StyledTitle, StyledP, StyledDivBtn, StyledBtn,
    StyledRow, GroupTitleP, DeleteStudentBtn, StyledListItemMeta, StyledStudentBlock,
    StyledTeachersBlock } from './style';

const { Title } = Typography;

class Group extends Component {
    state = {
      isChangeGroupName: false,
      groupName: 'GroupName',
      students: [
          {
              id: 1,
              avatar: 'https://res.cloudinary.com/lmsdp186/image/upload/v1588269845/owrnx4airzhhiua2yyqp.jpg',
              name: 'Lusia Gusivna',
              email: 'lusia@gmail.com',
          },
          {
              id: 2,
              avatar: 'https://res.cloudinary.com/lmsdp186/image/upload/v1588269845/owrnx4airzhhiua2yyqp.jpg',
              name: 'Lusia Gusivna',
              email: 'lusia@gmail.com',
          },
          {
              id: 3,
              avatar: 'https://res.cloudinary.com/lmsdp186/image/upload/v1588269845/owrnx4airzhhiua2yyqp.jpg',
              name: 'Lusia Gusivna',
              email: 'lusia@gmail.com',
          },
          {
              id: 4,
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
    render() {
        const { groupName, students, mentor } = this.state;
        return (
            <>
                <StyledRow justify={'center'}>
                    <Col span={8} align={'center'}>
                        <CustomAvatar />
                        <div>
                            <GroupTitleP>{groupName}</GroupTitleP>
                        </div>
                    </Col>
                </StyledRow>
                <StyledRow justify={'space-around'}>
                    <StyledStudentBlock span={12} align={'center'}>
                        <Title level={3} >{'Students'}</Title>
                        <List
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
                            <StyledBtn type={'primary'}>Homework</StyledBtn>
                            <StyledBtn type={'danger'}>Complete course</StyledBtn>
                        </StyledDivBtn>
                    </StyledTeachersBlock>
                </StyledRow>
            </>
        );
    }
}

export default Group;
