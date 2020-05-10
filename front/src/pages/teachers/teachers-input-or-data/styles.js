import style from 'styled-components';
import { Button as AntdButton, Form as AntdForm } from 'antd';
import 'antd/dist/antd.css';

const { Item: AntdItem } = AntdForm;

const NameSurname = style.p`
    font-size: 24px;
    font-weight: bold;
    float: left;
    margin-bottom: 10px;
    margin-right: 10px;
    clear: left;
`;

const Email = style.p`
    font-size: 18px;
    float: left;
    margin-bottom: 10px;
    margin-right: 5px;
    clear: left;
`;

const EditButton = style(AntdButton)`
    font-size: 20px;
    float: left;
    border: none;
`;

const CancelButton = style(AntdButton)`
    font-size: 20px;
    float: left;
    border: none;
`

const SaveButton = style(AntdButton)`
    font-size: 20px;
    float: left;
    border: none;
`

const Form = style(AntdForm)`
    float: left;
    clear: left;
`

const Item = style(AntdItem)`
    float: left;
`

export { NameSurname, Email,  EditButton, Form, SaveButton, Item, CancelButton }
