import { Button, Layout } from 'antd';
import style from "styled-components";
import 'antd/dist/antd.css';
const { Sider } = Layout;

const AddGroupButton = style(Button)`
    margin: 20px 0;
`;

const SiderStyle = style(Sider)`
    background-color: white;
    display: flex;
    flex-flow: column;
    align-items: center;
    &>div.ant-layout-sider-children {
        height: auto;
        position: fixed;
    }
`;

export { AddGroupButton, SiderStyle };
