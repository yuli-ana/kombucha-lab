import React, { Fragment } from 'react';
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ModalItem = ({ name, price, currentIdCount, image }) => {
    return (
        <Fragment>
            <li className='row cart-item'>
                <div className='col-40 cart-item-image'>
                    <img src={image} alt="name" />
                </div>
                <div className='row cart-item-info col-60'>
                    <h3 className='col-auto'>{name}</h3>
                    <p className='col-auto item-info-price'>${price}.00</p>
                    <button className="btn-remove"><FontAwesomeIcon className='icon' icon={faMinusSquare} /></button>
                    <span className="cart-item-count">{currentIdCount}</span>
                </div>
            </li>
        </Fragment>
    )
}

export default ModalItem;