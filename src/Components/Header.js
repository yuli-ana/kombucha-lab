import React, { Fragment } from 'react';
import FixedBar from './FixedBar';



const Header = () => {
    return (
        <Fragment>
            <header>
                <div className='wrapper'>
                <FixedBar text='buy' />
                    <h1>Kombucha Lab</h1>
                </div>
            </header>
        </Fragment>
    )
}

export default Header;