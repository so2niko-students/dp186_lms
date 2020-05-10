import style from 'styled-components';
import { Col as MyCol, Button as MyButton } from 'antd';
import 'antd/dist/antd.css';

const Col = style(MyCol)`
    margin: 10px;
    padding: 10px;
    border: 2px solid #333;
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

const Button = style(MyButton)`
    float: right;
`;

const DeleteButton = style(MyButton)`
    font-size: 20px;
    float: right;
    border: none;
`;

export { Col, Groups, Students, Button, DeleteButton }
