import style from 'styled-components';
import { Col as col, Input as input, Button as button } from 'antd';
import 'antd/dist/antd.css';

const Col = style(col)`
    margin-top: 70px; 
    border: 2px solid #333;
`;

const Input = style(input)`
    height: 40px;
    border-width: 2px;
    border-radius: 5px;
    background-color: #f7f8fa;
    color: black;
    ::placeholder {
        color: black;
      }
`;

Input.Password = style(input.Password)`
    height: 40px;
    border-width: 2px;
    border-radius: 5px;
    background-color: #f7f8fa;
    color: black;
    ::placeholder {
        color: black;
      }
`;

const Button = style(button)`
    width: 60%;
    margin-left: 20%;
    background-color: #0056d9;
    border-radius: 5px;
    height: 40px;
`;

export { Col, Input, Button }
