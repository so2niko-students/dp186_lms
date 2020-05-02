import React, { Component } from 'react';
import { UserOutlined } from '@ant-design/icons';
import {Avatar} from 'antd';

class CustomAvatar extends Component{
    render() {
        return(
            <Avatar size={96} icon={<UserOutlined />}></Avatar>
        )
    }
}

export default CustomAvatar;
