import React from 'react';
import styled from 'styled-components';

const MyBtn = props => {
    return(
        <Button onClick={props.onClick}>
        {props.myBtnTxt}
        </Button>
    )
}
export default MyBtn

const Button = styled.button`
display: inline-block;
outline: none;
cursor: pointer;
font-weight: 500;
border-radius: 3px;
padding: 0 16px;
border-radius: 4px;
color: #fff;
background: #0c7c59;
line-height: 1.15;
font-size: 14px;
height: 36px;
word-spacing: .08em;
letter-spacing: .089em;
text-decoration: none;
text-transformation: uppercase;
min-width: 100px;
max-width: 200px;
border: none;
text-align: center;
box-shadow: 0px 3px 1px -2px rgb(0 0 0 /.2);
transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2,1);
:hover {
    background: rgb(98, 0, 238);
}`