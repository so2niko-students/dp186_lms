import { Row, Col, Button, Popconfirm, Typography, Form, Layout } from 'antd';
import style from 'styled-components';
import 'antd/dist/antd.css';

import { CheckOutlined } from '@ant-design/icons';

const { Text } = Typography;

const LayoutStyle = style(Layout)`
    background-color: white;
    flexDirection: 'none'
`;

const Page = style(Row)`
    margin-bottom: 50px;
    // margin-left: 200px;
`;

const TaskTemplate = style(Col)`
    margin-top: 50px;
    border: 1px solid black;
    padding: 20px;
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
    right: 2%;
`;

const GroupName = style(Text)`
    font-size: 20px;
`;

const CheckedAndReady = style(Text)`
    margin-right: 20px;
    font-weight: bold;
`;

const TextOfTask = style(Text)`
    margin-top: 30px;
    margin-bottom: 30px;
`;

const FormItem = style(Form.Item)`
    display: inline-block;
`;

export {
    Page,
    TaskTemplate,
    AddTaskButton,
    DeleteButton,
    GroupName,
    CompletedRow,
    CheckOutlinedIcon,
    FormItem,
    TextOfTask,
    CheckedAndReady,
    LayoutStyle
};