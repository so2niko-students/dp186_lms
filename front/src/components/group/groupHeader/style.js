import style from 'styled-components';
import {Button, Form, Input} from 'antd';

export const GroupTitle = style.p`
    margin-top: 10px;
    font-size: 28px;
    color: #000;
    font-weight: bold;
    color: #40a9ff;
`;

export const EditGroupBtn = style(Button)`
    position: absolute;
    top: 0;
    right: 0;
`;

export const StyledForm = style(Form.Item)`
    margin-bottom: 12px;
    &>div.ant-form-item-label {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & div.ant-upload.ant-upload-select-picture-card {
        margin: 0px;
        border-radius: 50%;
        float: none;
    }
    & div.ant-upload.ant-upload-select-picture-card>span {
        display: flex;
        padding: 2px;
        overflow: hidden;
        border-radius: 50%;
    }
    & div.ant-upload.ant-upload-select-picture-card>span>img {
        border-radius: 50%;
        object-fit: cover;
    }   
`;

export const StyledInput = style(Input)`
    background: transparent;
    border: none;
    border-bottom: 2px solid black;
    width: 90%;
    color: #40a9ff;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    &:focus {
        border-bottom: 2px solid #40a9ff;
        box-shadow: none;
        width: 100%;
    }
    transition: 0.5s;
`;
