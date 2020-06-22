import React, { Component, Fragment } from 'react';
import { faShoppingCart, faTimes, faMinusSquare } from '@fortawesome/free-solid-svg-icons';
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
            <Fragment>
                <div className='fixed-bar'>
                    <button onClick={this.handleCartClick} className='btn-cart'><FontAwesomeIcon className='icon' icon={faShoppingCart} />{this.props.totalCounter}</button>
                    <div className={`modal ${this.state.activeModal ? 'openModal' : 'closeModal'}`}>
                        <div className={this.state.activeModal ? 'bg' : 'bg-none'}></div>
                        <button onClick={this.handleClick} className='btn-close'><FontAwesomeIcon icon={faTimes} /></button>
                        <ul className="sliding-menu">
                            {(this.props.items || [])
                                .reduce((acc, value) => {

                                    if (!acc.find(item => item.id === value.id)) {
                                        acc.push(value);
                                    }
                                    return acc;

                                }, [])
                                .map((item, i) => {
                                    console.log(this.props.count[item.id]);
                                    return (
                                        <li key={i} className='row cart-item'>
                                            <div className='col-50'>
                                                <img src={item.image} alt="name" />
                                            </div>
                                            <div className='cart-item-info col-50'>
                                                <p>{item.name}</p>
                                                <p>{item.price}</p>
                                                <button className="btn-remove"><FontAwesomeIcon className='icon' icon={faMinusSquare} /></button>
                                                <p>{this.props.count[item.id]}</p>
                                            </div>
                                        </li>
                                    )
                                })

                            }
                        </ul>
                        <div>
                            <p>total <span>$11.00</span></p>
                            <a href='https://www.villagejuicery.com/collections/kombucha' target='blank' rel='noopener noreferer' >BUY</a>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default FixedBar;






