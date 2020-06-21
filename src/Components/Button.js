import React, { Fragment } from 'react';



const Button = ({ children }) => {
    return (
        <Fragment>
            <button className='btn-cart'>{children}</button>
        </Fragment>
    )
}

export default Button;