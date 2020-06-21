import React, { Component } from 'react';
import { faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Modal from './Modal';
// import Button from './Button';

class FixedBar extends Component {
    constructor() {
        super();

        this.state = {
            activeModal: false,
        }
    }

    handleCartClick = () => {
        this.setState({
            activeModal: true,
        })
    }

    handleClick = () => {
        this.setState({
            activeModal: false,
        })
    }

    render() {
        return (
            <div className='fixed-bar'>
                <button onClick={this.handleCartClick} className='btn-cart'><FontAwesomeIcon className='icon' icon={faShoppingCart} /></button>
                <div className={`modal ${this.state.activeModal ? 'openModal' : 'closeModal'}`}>
                    <button onClick={this.handleClick} className='btn-close'><FontAwesomeIcon icon={faTimes}/></button>
                    <ul className="sliding-menu">
                        <li></li>
                    </ul>
                    <div>
                        <p>total <span>$11.00</span></p>
                        <a href='https://www.villagejuicery.com/collections/kombucha' target='blank' rel='noopener noreferer' >BUY</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default FixedBar;






