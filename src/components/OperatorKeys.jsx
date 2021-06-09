import React from 'react'
import { Button } from "./Button";

export const OperatorKeys = (props) => {
    const {operators} = props;
    console.log(operators)
    return (
        <>
        {operators.map((item,i) => (
        // <Button buttonText={item} />


<Button key={`${item.displayName}_operator`} buttonText={item.symbol}/>
        
      


      ))}
        </>
    )
}


// return (
//     <p key={`${anObjectMapped.name}_{anObjectMapped.email}`}>
//         {anObjectMapped.name} - {anObjectMapped.email}
//     </p>
// );