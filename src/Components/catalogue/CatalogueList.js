import React from 'react';


const List = ({ children }) => {
    return (
        <ul className='row'>
            {children}
        </ul>
    )
}

export default List;