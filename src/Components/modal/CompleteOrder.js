import React from 'react';
import TotalPrice from '../modal/TotalPrice';


const CompleteOrder = ({ modalCarts, count }) => {
    return (
        <div className='modal-order'>
            <TotalPrice
                count={count}
                modalCarts={modalCarts}
            />
            <a
                className='btn-order'
                href='https://www.villagejuicery.com/collections/kombucha'
                target="_blank"
                rel="noopener noreferrer"
            >BUY</a>
        </div>
    )
}

export default CompleteOrder;