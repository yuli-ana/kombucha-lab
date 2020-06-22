import React, { Component, Fragment } from 'react';
import { faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalItem from '../modal/ModalItem'
import ModalList from '../modal/ModalList';
import CompleteOrder from '../modal/CompleteOrder';

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
                        <ModalList>
                            {(this.props.items || [])
                                .reduce((acc, value) => {

                                    if (!acc.find(item => item.id === value.id)) {
                                        acc.push(value);
                                    }
                                    return acc;

                                }, [])
                                .map((item, i) => {
                                    return (
                                        <ModalItem key={i} name={item.name} price={item.price} currentIdCount={this.props.count[item.id]} image={item.image} />
                                    )
                                })
                            }
                        </ModalList>
                        <CompleteOrder/>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default FixedBar;
