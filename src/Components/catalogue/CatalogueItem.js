import React from 'react';

const CatalogueItem = ({image, name, price, updateCount, itemCounter  }) => {
    return (
        <li 
            className='col-33 catalogue-item'>
            <img src={image} alt={name} />
            <div className='item-details'>
                <h2 className='item-title'>{name}</h2>
                <p className='item-price'>${price}.00</p>
            </div>
            <div className='row'>
                <button
                    onClick={updateCount}
                    className='btn-add col-80'>Add to cart
                    </button>
                <p className='col-20 item-counter'>{itemCounter}</p>
            </div>
        </li>
    )

}


export default CatalogueItem;