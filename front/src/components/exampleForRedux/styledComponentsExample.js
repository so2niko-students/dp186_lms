import style from 'styled-components';

const Heading = style.h1`
    color: red;
    text-align: center;
`;

const Wrapper = style.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`;

const Ptag = style.p`
    text-align: center;
    font-size: 40px;
    color: black;
    font-weight: 700;
`;

export { Heading, Wrapper, Ptag };
