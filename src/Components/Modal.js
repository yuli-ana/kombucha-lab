import React, { Component } from 'react';



class Modal extends Component {
    constructor(){
        super();

        this.state = {
            activeModal: false,
        }
    }


    handleClick = (e) => {
        e.preventDefault();

        console.log('click Me again');
    }

    render() {
        return(
                <div>
                <h2>Shopping cart</h2>
                    <ul>
                        <li></li>
                    </ul>
                </div>

        )
    }
}

export default Modal;