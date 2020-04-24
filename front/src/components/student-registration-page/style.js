import style from 'styled-components';
import {Col as col, Input as input, Button as button} from 'antd';
import 'antd/dist/antd.css';

const Col = style(col)`
    border: 2px solid #333;

`;
// padding: 30px 100px;
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
    background-color: #0056d9;
    border-radius: 5px;
    height: 40px;
`
// width: 180px;
export {Col, Input, Button}



// padding: 30px 3rem;
