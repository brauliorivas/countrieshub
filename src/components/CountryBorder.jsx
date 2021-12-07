import React from 'react';
import '@styles/CountryBorder.scss';

const CountryBorder = ({name}) => {
    return (
        <div className="country-border">
            <p className="country-border--name">{name}</p>
        </div>
    );
}

export default CountryBorder;