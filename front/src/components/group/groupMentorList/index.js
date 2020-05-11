import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Avatar, List } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Spinner } from '../../spinner/Spinner';
import { StyledListItem, StyledListItemMeta, StyledP, StyledTitle, StyledBtn, StyledDivBtn } from './style';

class GroupMentorList extends Component {
    render(){
        const { currentGroup: { teacher } } = this.props;
        return(
            <div>
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
            </div>
        )
    }
}

const mapStateToProps = ({ groups: { currentGroup } }) => ({ currentGroup });

export default connect(mapStateToProps, null)(GroupMentorList);
