import style from 'styled-components';
import { Input, Button } from 'antd';
import 'antd/dist/antd.css';

const StyledInput = style(Input)`
    height: 40px;
    border-width: 2px;
    border-radius: 5px;
    background-color: #f7f8fa;
    color: black;
    ::placeholder {
        color: grey;
      }
`;

const StyledButton = style(Button)`
    width: 60%;
    margin-left: 20%;
    background-color: #0056d9;
    border-radius: 5px;
    height: 40px;
`;

const StyledBtnModal = style(Button)`
    width: 15%;
    margin-left: 10%;
    margin-top: 5%;
    background-color: #0056d9;
    border-radius: 5px;
    height: 40px;
`;

const ErrorText = style.p`
    font-size: 14px;
    text-align: center;
    color: tomato;
`;

export { StyledInput, StyledButton, StyledBtnModal, ErrorText }
