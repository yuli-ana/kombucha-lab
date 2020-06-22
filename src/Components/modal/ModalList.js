import React from 'react';

const ModalList = ({children, total}) => {
    return (
        <ul>
            <h2 className="modal-list-title">Shopping cart</h2>
            {children}
        </ul>
    )
}

export default ModalList;