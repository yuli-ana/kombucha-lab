import React, { Fragment } from 'react';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const ModalItem = ({ name, price, currentIdCount, image }) => {
    return (
        <Fragment>
            <li className='row cart-item'>
                <div className='col-40 cart-item-image'>
                    <img
                        src={image}
                        alt="name"
                    />
                </div>
                <div className='row cart-item-info col-60'>
                    <h3 className='col-auto'>{name}</h3>
                    <p className='col-auto item-info-price'>${price}.00</p>
                    <div className="row cart-update-count">
                        <div className="row col-auto">
                            <button
                                className='btn btn-cart-icon col-auto'>
                                <FontAwesomeIcon
                                    className='icon'
                                    icon={faMinus} />
                            </button>
                            <span className='cart-item-count col-auto'>{currentIdCount}</span>
                            <button
                                className='btn btn-cart-icon col-auto'>
                                <FontAwesomeIcon
                                    className='icon'
                                    icon={faPlus} />
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        </Fragment>
    )
}

export default ModalItem;