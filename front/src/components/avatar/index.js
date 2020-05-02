import React, { Component } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { StyledAvatar, StyledDiv } from './style';

class CustomAvatar extends Component{

    render() {
        return(
            <StyledDiv>
                <StyledAvatar size={96} icon={<UserOutlined />} />
            </StyledDiv>
        )
    }
}

export default CustomAvatar;
