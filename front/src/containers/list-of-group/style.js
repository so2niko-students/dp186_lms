import { Button, Layout } from 'antd';
import style from "styled-components";
import 'antd/dist/antd.css';
const { Sider } = Layout;

const AddGroupButton = style(Button)`
    width: 60%;
    border-radius: 5px;
    margin-left: 20%;
    margin-top: 30px;
    margin-bottom: 30px;
`;

const SiderStyle = style(Sider)`
    background-color: white;
`;

export { AddGroupButton, SiderStyle } ;
