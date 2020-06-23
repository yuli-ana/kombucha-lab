import React from 'react';

const ModalList = ({children, total}) => {
    return (
        <ul>
            <h2 className="modal-list-title">Shopping cart: {total > 1 ? (`${total} item(s)`) : (`${total} item`)}</h2>
            {children}
        </ul>
    )
}

export default ModalList;