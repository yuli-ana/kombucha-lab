import React, { Component, Fragment } from 'react';
import { faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalItem from '../modal/ModalItem'
import ModalList from '../modal/ModalList';
import CompleteOrder from '../modal/CompleteOrder';
// import TotalPrice from '../modal/TotalPrice';

class FixedBar extends Component {
    constructor() {
        super();

        this.state = {
            activeModal: false,
        }
    }

    // Update to true when ModalCart is open
    handleCartClick = () => {
        this.setState({
            activeModal: true,
        })
    }

    // Update to false when modal is closed
    handleClick = () => {
        this.setState({
            activeModal: false,
        })
    }

    render() {
        return (
            <Fragment>
                <div className='fixed-bar'>
                    <button
                        onClick={this.handleCartClick}
                        className='btn btn-cart'>
                        <FontAwesomeIcon
                            className='icon'
                            icon={faShoppingCart} />
                        {this.props.cartCounter}
                    </button>

                    <div
                        className={`modal ${this.state.activeModal ? 'open-modal' : 'modal'}`}>
                        <div
                            className={this.state.activeModal ? 'add-overlay' : 'remove-overlay'}>
                        </div>
                        <button
                            onClick={this.handleClick}
                            className='btn btn-close'>
                            <FontAwesomeIcon
                                icon={faTimes} />
                        </button>
                        <ModalList cartCounter={this.props.cartCounter}>
                            {(this.props.modalCarts || [])
                                .reduce((acc, value) => {

                                    if (!acc.find(item => item.id === value.id)) {
                                        acc.push(value);
                                    }
                                    return acc;

                                }, [])
                                .map((item, i) => {
                                    return (
                                        <ModalItem
                                            key={i}
                                            name={item.name}
                                            price={item.price}
                                            currentIdCount={this.props.count[item.id]}
                                            image={item.image}
                                        />
                                    )
                                })
                            }
                        </ModalList>
                        <CompleteOrder modalCarts={this.props.modalCarts} count={this.props.count} />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default FixedBar;
