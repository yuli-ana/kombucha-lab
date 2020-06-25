import React from 'react';

const ModalList = ({children, cartCounter}) => {
    return (
        <ul>
            <h2 className="modal-list-title">Shopping cart: {cartCounter > 1 ? (`${cartCounter} item(s)`) : (`${cartCounter} item`)}</h2>
            {children}
        </ul>
    )
}

export default ModalList;