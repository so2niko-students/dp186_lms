import style from 'styled-components';
import {Col as col, Button as button, Form as form, Input as input} from 'antd';
import 'antd/dist/antd.css';

const { Item:item } = form;

const Col = style(col)`
    margin: 10px;
    padding: 10px;
    border: 2px solid #333;
`;

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

const Groups = style.span`
    font-size: 18px;
    float: left;
    margin-right: 10px;
    clear: left;
`;

const Students = style.span`
    font-size: 18px;
    float: left;
    margin-left: 10px; 
`;

const Button = style(button)`
    float: right;
`;

const DeleteButton = style(button)`
    font-size: 20px;
    float: right;
    border: none;
`;

const EditButton = style(button)`
    font-size: 20px;
    float: left;
    border: none;
`;

const CancelButton = style(button)`
    font-size: 20px;
    float: left;
    border: none;
`

const SaveButton = style(button)`
    font-size: 20px;
    float: left;
    border: none;
`

const Form = style(form)`
    float: left;
    clear: left;
`

const Item = style(item)`
    float: left;
`

export { Col, NameSurname, Email, Groups, Students, Button, EditButton, DeleteButton, Form, SaveButton, Item, CancelButton }
