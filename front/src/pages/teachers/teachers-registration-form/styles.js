import style from 'styled-components';
import {Button as button} from 'antd';
import 'antd/dist/antd.css';

const Button = style(button)`
    width: 60%;
    margin-left: 20%;
    background-color: #0056d9;
    border-radius: 5px;
    height: 40px;
`;

export {Button}