import { Button, Col } from 'antd';
import style from 'styled-components';
import 'antd/dist/antd.css';

const StyledCol = style(Col)`
    margin-top: 50px; 
    border: 2px solid #333;
    padding: 30px;
`;

const SaveButton = style(Button)`
    width: 50%;
    border-radius: 5px;
`;

export { StyledCol, SaveButton };