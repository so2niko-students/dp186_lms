import style from 'styled-components';
import { List, Button, Row, Col } from 'antd';

export const StyledRow = style(Row)`
    padding: 20px 30px;
`;

export const GroupTitleP = style.p`
    margin-top: 10px;
    font-size: 28px;
    color: #000;
    font-weight: bold;
    color: #40a9ff;
`;

export const StyledColHeader = style(Col)`
    position: relative;
    border-bottom: 1px solid #cccccc;
`;

export const EditGroupBtn = style(Button)`
    position: absolute;
    top: 0;
    right: 0;
`;

export const StyledUserBlock = style(Col)`
    
`;

export const StyledStudentBlock = style(StyledUserBlock)`
    background: #f1f1f1;
    padding: 20px 0;
    border-radius: 10px;
`;

export const StyledTeachersBlock = style(StyledUserBlock)`
    
`;

export const StyledList = style(List)`
    max-height: 550px;
    overflow-y: scroll;
`;

export const StyledListItem = style(List.Item)`
    justify-content: flex-start;
    margin: 0 30px;
    border-bottom: 1px solid #cccccc!important;
    &:last-child {
        border-bottom: 0px!important;
    }
`;

export const StyledListItemMeta = style(List.Item.Meta)`
    align-items: center;
    padding: 15px 55px;
    flex: none;
    &>div>h4 {
        text-align: left;
    }
`;

export const StyledTitle = style.span`
    text-align: left;
    margin: 0px!important;
    font-weight: bold;
    font-size: 18px;
`;

export const DeleteStudentBtn = style(Button)`
    font-weight: bolder;
    font-size: 14px;
    border-radius: 5px;  
`;

export const StyledP = style.p`
    margin: -10px 0 0 0!important;
    text-align: left;
    color: #adadad;
    
`;

export const StyledDivBtn = style.div`
    display: flex;
    justify-content: center;
`;

export const StyledBtn = style(Button)`
    margin: 10px;
    width: 150px;
    height: 40px;
    font-size: 15px;
    border-radius: 5px;
    font-weight: bold;
`;
