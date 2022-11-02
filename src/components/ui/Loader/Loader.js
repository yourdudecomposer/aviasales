import React from 'react';
import './Loader.scss';

function Loader () {
    return (
        <>
            <div className="content">
                <div className="planet">
                    <div className="ring"></div>
                    <div className="cover-ring"></div>
                    <div className="spots">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <p>загружаем билеты..</p>
            </div></>
    );
}

export default Loader;