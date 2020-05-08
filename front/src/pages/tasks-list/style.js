import { Row, Col, Button, Popconfirm, Typography, Form } from 'antd';
import style from 'styled-components';
import 'antd/dist/antd.css';

import { CheckOutlined } from '@ant-design/icons';

const { Text } = Typography;


const Page = style(Row)`
    margin-bottom: 50px;
`;

const TaskTemplate = style(Col)`
    margin-top: 50px;
    border: 1px solid black;
`;

const AddTaskButton = style(Button)`
    width: 10%;
    position: absolute;
    right: 0;
    border-radius: 5px;
    margin-top: 20px;
`;

const DeleteButton = style(Popconfirm)`
    position: absolute;
    right: 5%;
    z-index: 2;
`;

const CheckOutlinedIcon = style(CheckOutlined)`
    margin-top: 5px;
`;

const CompletedRow = style(Row)`
    position: absolute;
    right: 5%;
`;

const GroupName = style(Text)`
    font-size: 20px;
`;

const FormItem = style(Form.Item)`
    display: inline-block;
`;

export { Page, TaskTemplate, AddTaskButton, DeleteButton, GroupName, CompletedRow, CheckOutlinedIcon, FormItem };