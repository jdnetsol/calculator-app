import React from 'react'

export const Button = (props) => {
    const { buttonText } = props;
    return (
        <button>
            { buttonText }
        </button>
    )
}
