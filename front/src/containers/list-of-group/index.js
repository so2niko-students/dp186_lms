import React, { Component } from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import { AddGroupButton, SiderStyle, StyledMenuItem } from './style';
import { setCurrentGroup, loadGroupsData, showModalCreateGroup } from '../../common/redux/groups/groups.action';
import { connect } from 'react-redux';
import {Spinner} from '../../components/spinner/Spinner';
import GroupCreationWindow from '../../containers/modal-group-creation';

class ListOfGroup extends Component {

    componentDidMount() {
        const { onHandleLoadGroupData } = this.props;
        onHandleLoadGroupData();
    }

    render() {
        const { onHandleGroup, groupList, onShowModalCreateGroup } = this.props;
        return (
            <SiderStyle width={200} className="site-layout-background" >
                <AddGroupButton type="primary" onClick={onShowModalCreateGroup}> Add group </AddGroupButton>
                <Menu style={
                    { overflow: 'hidden', position: 'fixed', left: 0, height: '100%', borderRight: 0, width: 200, display: 'flex', alignItems: 'center', flexFlow: 'column' }
                } mode="vertical" defaultSelectedKeys={['0']} >
                    {
                        groupList ?
                            groupList.map((group, index) => <StyledMenuItem key={index} onClick={onHandleGroup}>{group.groupName}</StyledMenuItem>)
                            :
                            <Spinner load={Spinner.loading()} />
                    }
                </Menu>
                <GroupCreationWindow />
            </SiderStyle>
        )
    }
}

const mapStateToProps = ({ groups: { groupList }, login: { userId } }) => ({ groupList, userId });

const mapDispatchToProps = (dispatch) => {
    return{
        onHandleGroup: (data) => {
            return dispatch(setCurrentGroup(+data.key));
        },
        onHandleLoadGroupData: (data) => {
            return dispatch(loadGroupsData(data))
        },
        onShowModalCreateGroup: () => {
            return dispatch(showModalCreateGroup())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfGroup);
