import React, { Component } from 'react';
import { Spin, message } from 'antd';
import 'antd/dist/antd.css';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export class Spinner extends Component {
    static loading = () => {
        return <Spin indicator={antIcon} />;
    };
    static success = (text) => {
        return message.success(text);
    };
    static error = (text) => {
        return message.error(text);
    };
    static warning = (text) => {
        return message.warning(text);
    };

    render() {
        return (
            <div>
                {this.props.load}
            </div>
        )
    }
}
