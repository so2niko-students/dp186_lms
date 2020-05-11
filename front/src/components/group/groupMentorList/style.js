import style from 'styled-components';
import {Button, List} from 'antd';

export const StyledListItem = style(List.Item)`
    justify-content: space-between;
    margin: 0 30px;
    border-bottom: 1px solid #cccccc!important;
    &:last-child {
        border-bottom: 0px!important;
    }
    @media screen and (max-width: 576px) {
        flex-flow: column;
    }
`;

export const StyledListItemMeta = style(List.Item.Meta)`
    align-items: center;
    padding: 15px;
    flex: none;
    &>div>h4 {
        text-align: left;
    }
    @media screen and (max-width: 576px) {
        flex-flow: column;
        &>div.ant-list-item-meta-avatar {
            margin-right: 0px;
        }
        &>div>h4 {
            text-align: center;
        }
    }
`;

export const StyledP = style.p`
    margin: -10px 0 0 0!important;
    text-align: left;
    color: #adadad;
    @media screen and (max-width: 576px) {
        text-align: center;
    }
`;

export const StyledTitle = style.span`
    text-align: left;
    margin: 0px!important;
    font-weight: bold;
    font-size: 18px;
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