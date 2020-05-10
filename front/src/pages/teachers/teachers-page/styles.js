import style from 'styled-components';
import { Col as AntdCol, Button as AntdButton, Typography } from 'antd';
import 'antd/dist/antd.css';

const { Title: AntdTitle } = Typography;

const Title = style(AntdTitle)`
    float: left;
`

const Col = style(AntdCol)`
    margin-top: 70px; 
`;

const ColPagination = style(AntdCol)`
    margin: 30px;
`;

const Button = style(AntdButton)`
    float: right;
`;

const SpinnerContainer = style.div`
    padding: 0 50%;
`

export {Col, Button, Title, ColPagination, SpinnerContainer}
