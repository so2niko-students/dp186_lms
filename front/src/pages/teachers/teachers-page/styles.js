import style from 'styled-components';
import { Col as MyCol, Button as MyButton, Typography } from 'antd';
import 'antd/dist/antd.css';

const { Title: MyTitle } = Typography;

const Title = style(MyTitle)`
    float: left;
`

const Col = style(MyCol)`
    margin-top: 70px; 
`;

const ColPagination = style(MyCol)`
    margin: 30px;
`;

const Button = style(MyButton)`
    float: right;
`;

const SpinnerContainer = style.div`
    padding: 0 50%;
`

export {Col, Button, Title, ColPagination, SpinnerContainer}
