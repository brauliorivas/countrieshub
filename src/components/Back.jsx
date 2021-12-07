import React from 'react';
import '@styles/Back.scss';

const Back = () => {
    return (
        <a href="/" className="back">
            <button className="back__button" type="button">
                <i className="fas fa-arrow-left"></i><p>Back</p>
            </button>
        </a>
    );
}

export default Back;