import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'antd';
import style from "styled-components";
import 'antd/dist/antd.css';

const Container = style(Row)`
    margin-top: 50px; 
`;
const StyledCol = style(Col)`
    border: 2px solid #333;
    padding: 30px;
`;
const LoginButton = style(Button)`
    width: 60%;
    border-radius: 5px;
    text-align: center;
`;
const ForgotPassword = style(Link)`
    text-align: center;
    color: #333;
`;

export { Container, StyledCol, LoginButton, ForgotPassword } ;