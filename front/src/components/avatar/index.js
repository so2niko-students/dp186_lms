import React, { Component } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { StyledAvatar, StyledDiv } from './style';

class CustomAvatar extends Component{

    render() {
        const { avatar } = this.props;
        return(
            <StyledDiv>
                {
                !avatar ?
                    <StyledAvatar size={96} icon={<UserOutlined/>}/>
                    :
                    <StyledAvatar size={96} src={avatar}/>
                }
            </StyledDiv>
        )
    }
}

export default CustomAvatar;
