import { Link } from 'react-router-dom';
import { Button, Col } from 'antd';
import style from 'styled-components';
import 'antd/dist/antd.css';

const StyledCol = style(Col)`
    margin-top: 50px; 
    border: 2px solid #333;
    padding: 30px;
`;

const LoginButton = style(Button)`
    width: 60%;
    border-radius: 5px;
    margin-left: 20%;
`;

const ForgotPassword = style(Link)`
    text-align: center;
    color: #333;
`;

const ErrorText = style.p`
    font-size: 14px;
    text-align: center;
    color: tomato;
`;

export { StyledCol, LoginButton, ForgotPassword, ErrorText };