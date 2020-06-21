import React from 'react';

const Main = ({ children }) => {
    return (
        <main>
            <div className="wrapper">
                <div className='row row--end'>
                    <section className='section'>
                        {children}
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Main;