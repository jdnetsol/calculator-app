import React from 'react'

export const Layout = (props) => {
    return (
        <>
            {props.children}
            <footer>Some footer</footer>
        </>
    )
}
