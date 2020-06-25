import React from 'react';

// First value will be undefined because user hasn't chosen any item yet that's why assigned fallback value []
const TotalPrice = ({ modalCarts = [], count }) => {
    const total = modalCarts.reduce((acc, currentItem) => {
        // Multiply the currentItem with count 
        const multiplication = currentItem.price * count[currentItem.id];
        return acc + multiplication;
    }, 0)

    return (
        <span className='modal-total'>
            Your total is {total}.00 CAD
        </span>
    )
}

export default TotalPrice;
