import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Avatar, Modal } from 'antd';
import { ExclamationCircleOutlined, UserOutlined} from '@ant-design/icons';
import { Spinner } from '../../spinner/Spinner';
import { DeleteStudentBtn, StyledList, StyledListItem, StyledListItemMeta, StyledP, StyledTitle } from './style';
import { deleteStudentFromGroup } from '../../../common/redux/groups/groups.action';
import { MENTOR, SUPERADMIN } from '../../../common/functions/get-user-type';

const { confirm } = Modal;

class GroupStudentsList extends Component {

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
        const { currentGroup: { students }, role } = this.props;
        return (
            <div>
                {
                    students ?
                        <StyledList
                            itemLayout={'horizontal'}
                            dataSource={students}
                            renderItem={item => (
                                <StyledListItem key={item.id}>
                                    <StyledListItemMeta
                                        avatar={<Avatar size={48} src={item.avatar && item.avatar.avatarLink} icon={!item.avatar && <UserOutlined />} />}
                                        title={<StyledTitle>{`${item.firstNameEng} ${item.lastNameEng}`}</StyledTitle>}
                                        description={<StyledP align={'left'}>{item.email}</StyledP>}
                                    />
                                    {
                                        role === MENTOR || role === SUPERADMIN ?
                                            <DeleteStudentBtn type={'danger'} key={item.id} onClick={()=>{this.handleDeleteStudent(item.id)}}>Delete</DeleteStudentBtn>
                                            : null

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
            </div>
        );
    }
}

const mapStateToProps = ({ groups: { currentGroup }, login: { role } }) => ({ currentGroup, role })
const mapDispatchToProps = { deleteStudentFromGroup };

export default connect(mapStateToProps, mapDispatchToProps)(GroupStudentsList);