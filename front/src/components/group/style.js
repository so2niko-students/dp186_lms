import style from 'styled-components';
import { List, Avatar, Typography, Button } from 'antd';

export const StyledListItem = style(List.Item)`
    justify-content: center;
`;

export const StyledAvatar = style(Avatar)`
    margin: 0 10px;
`;

export const StyledTitle = style(Typography.Title)`
    text-align: left;
    margin: 0px!important;
    font-weight: bold;
`;

export const StyledP = style.p`
    margin: 0!important;
    text-align: left;
    color: #adadad;
    
`;

export const StyledDivBtn = style.div`
    display: flex;
    flex-flow: column;
    width: 150px;
    position: absolute;
    top: 15px;
    right: 20px;
`;

export const StyledBtn = style(Button)`
    margin: 10px 0;
`;
