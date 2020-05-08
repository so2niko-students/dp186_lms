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

const ColPagination = style(col)`
    margin: 30px;
`;

const Button = style(button)`
    float: right;
`;

const SpinnerContainer = style.div`
    padding: 0 50%;
`

export {Col, Button, Title, ColPagination, SpinnerContainer}
