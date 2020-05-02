import React, {Component} from 'react';
import { Row, Col, Typography, List } from 'antd';
import CustomAvatar from '../avatar';
import {StyledListItem, StyledAvatar, StyledTitle, StyledP, StyledDivBtn, StyledBtn} from './style';

const { Title } = Typography;

class Group extends Component {
    state = {
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
    render() {
        const { groupName, students, mentor } = this.state;
        return (
            <>
                <Row justify={'center'}>
                    <Col span={8} align={'center'}>
                        <CustomAvatar />
                        <Title level={2} >{groupName}</Title>
                    </Col>
                </Row>
                <Row>
                    <Col span={12} align={'center'}>
                        <Title level={3} >{'Students'}</Title>
                        <List
                            itemLayout={'horizontal'}
                            dataSource={students}
                            renderItem={item => (
                                <StyledListItem>
                                    <StyledAvatar size={48} src={item.avatar} />
                                    <div>
                                        <StyledTitle level={4}>{item.name}</StyledTitle>
                                        <StyledP align={'left'}>{item.email}</StyledP>
                                    </div>
                                </StyledListItem>
                            )}
                        />
                    </Col>
                    <Col span={12} align={'center'}>
                        <Title level={3} >{'Mentor'}</Title>
                        <List
                            itemLayout={'horizontal'}
                            dataSource={mentor}
                            renderItem={item => (
                                <StyledListItem>
                                    <StyledAvatar size={48} src={item.avatar} />
                                    <div>
                                        <StyledTitle level={4}>{item.name}</StyledTitle>
                                        <StyledP align={'left'}>{item.email}</StyledP>
                                    </div>
                                </StyledListItem>
                            )}
                        />
                    </Col>
                </Row>
                <StyledDivBtn>
                    <StyledBtn type={'primary'}>Homework</StyledBtn>
                    <StyledBtn type={'danger'}>Complete course</StyledBtn>
                </StyledDivBtn>
            </>
        );
    }
}

export default Group;
