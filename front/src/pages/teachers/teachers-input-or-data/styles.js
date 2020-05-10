import style from 'styled-components';
import { Button as MyButton, Form as MyForm } from 'antd';
import 'antd/dist/antd.css';

const { Item: MyItem } = MyForm;

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

const EditButton = style(MyButton)`
    font-size: 20px;
    float: left;
    border: none;
`;

const CancelButton = style(MyButton)`
    font-size: 20px;
    float: left;
    border: none;
`

const SaveButton = style(MyButton)`
    font-size: 20px;
    float: left;
    border: none;
`

const Form = style(MyForm)`
    float: left;
    clear: left;
`

const Item = style(MyItem)`
    float: left;
`

export { NameSurname, Email,  EditButton, Form, SaveButton, Item, CancelButton }
