import React from 'react';

const CatalogueItem = ({ image, name, price, updateCount, itemCounter }) => {
    return (
        <li
            className='col-33 catalogue-item'>
            <img src={image} alt={name} />
            <div className='item-details'>
                <h2 className='item-title'>{name}</h2>
                <p className='item-price'>${price}.00</p>
            </div>
            <div className='row row--column'>
                <span className='item-counter'>{itemCounter}</span>
                <button
                    onClick={updateCount}
                    className='btn-add'>Add to cart
                    </button>
            </div>
        </li>
    )

}


export default CatalogueItem;