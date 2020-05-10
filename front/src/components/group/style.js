import style from 'styled-components';
import { Row, Col } from 'antd';

export const StyledRow = style(Row)`
    padding: 20px 30px;
`;

export const StyledColHeader = style(Col)`
    position: relative;
    border-bottom: 1px solid #cccccc;
    min-height: 190px;
    min-width: 360px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledUserBlock = style(Col)`
    
`;

export const StyledStudentBlock = style(StyledUserBlock)`
    background: #ffffff;
    padding: 20px 0;
    border-radius: 10px;
`;

export const StyledTeachersBlock = style(StyledUserBlock)`
    @media screen and (max-width: 576px) {
        margin-top: 25px;
    }
`;

