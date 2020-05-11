import { Button, Layout, Menu } from 'antd';
import style from 'styled-components';
import 'antd/dist/antd.css';
const { Sider } = Layout;

const AddGroupButton = style(Button)`
    margin: 20px 0;
    left: 50%;
    transform: translate(-50%);
`;

const SiderStyle = style(Sider)`
    background-color: white;
    display: flex;
    flex-flow: column;
    align-items: center;
    &>div.ant-layout-sider-children {
        height: auto;
        position: fixed;
        width: 200px;
    }
`;

const StyledMenuItem = style(Menu.Item)`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export { AddGroupButton, SiderStyle, StyledMenuItem };