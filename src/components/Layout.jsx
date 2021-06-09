import React from 'react'

export const Layout = (props) => {
    return (
        <div>
            <h1>Calculator</h1>
            {props.children}
            <footer>Some footer</footer>
        </div>
    )
}
