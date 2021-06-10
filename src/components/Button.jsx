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
`;

export const Button = (props) => {
    const { buttonText } = props;
    return (
        <CalculatorButton onClick={(e)=> props.onClick(e)} value={buttonText}>
            { buttonText }
        </CalculatorButton>
    )
}
