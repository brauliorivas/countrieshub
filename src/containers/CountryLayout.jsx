import React from 'react';
import Back from '@components/Back';
import '@styles/CountryLayout.scss';

const CountryLayout = ({country}) => {
    return (
        <section className="country-info">
            <Back />
            {country}
        </section>
    );
}

export default CountryLayout;