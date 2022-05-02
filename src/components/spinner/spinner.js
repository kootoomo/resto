import React from 'react';

import spinImg from './spinner.gif';
import './spinner.scss';

const Spinner = () => {
        // return <div className="spinner">loading...</div> 
        return (
            <>
                <div className="spinout">
                    <div className="spinner">Loading...</div> 
                    <img src={spinImg} className="spinImg" alt="spinner"/>
                </div>
            </>
        )
}

export default Spinner;
