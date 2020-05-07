import style from 'styled-components';
import {Col as col, Button as button, Typography} from 'antd';
import 'antd/dist/antd.css';

const { Title:title } = Typography;

const Title = style(title)`
    float: left
`

const Col = style(col)`
    margin-top: 70px; 
`;

const Button = style(button)`
    float: right;
`;

export {Col, Button, Title}
