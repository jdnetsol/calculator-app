import React from 'react'
import styled from "styled-components";

const CalculatorButton = styled.button`
display: inline-block;
borderRadius: 50px;
padding: 10px;
cursor: pointer;
background-color: #cecece;
color: #121212;
min-height: 44px;
min-width: 44px;
font-weight: bold;
font-size: x-large;
margin: 16px;
&:hover {
    background-color: #666;
    color: #fff;
}
&:active {
    background-color: #cecece;
    color: #121212;
    -webkit-box-shadow: inset 0px 0px 5px #333;
     -moz-box-shadow: inset 0px 0px 5px #333;
          box-shadow: inset 0px 0px 5px #333;
    outline: none;
}
`;

export const Button = (props) => {
    const { buttonText, displayName, type } = props;
    return (
        <CalculatorButton onClick={(e)=> props.onClick(e)} value={buttonText} aria-label={"" || displayName } type={type || "button" }>
            { buttonText }
        </CalculatorButton>
    )
}
