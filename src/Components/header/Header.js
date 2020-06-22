import React, { Fragment } from 'react';
import FixedBar from './FixedBar';



const Header = () => {
    return (
        <Fragment>
            <header className='header'>
                <div
                    className='wrapper'>
                    <FixedBar
                        text='buy'/>
                    <div 
                    className='header-title'>
                        <h1>Kombucha Lab</h1>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default Header;