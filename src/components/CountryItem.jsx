import React from 'react';
import '@styles/CountryItem.scss';

const CountryItem = ({ country }) => {
    const setCountry = () => {
        const data = JSON.stringify({
            flag: country.flag,
            name: country.name,  
            population: country.population.toLocaleString(),
            region: country.region,
            subregion: country.subregion,
            capital: country.capital,
            topLevelDomain: country.topLevelDomain[0],
            currencies: country.currencies,
            languages: country.languages,
            nativeName: country.nativeName,
            borders: country.borders,
        });
        localStorage.setItem('country', data);
        window.location.href = '/country';
    }

    return (
        <a onClick={setCountry} className="country-item-link">
            <div className="country-item">
                <img src={country.flag} alt={country.name} />
                <div className="country-item__description">
                    <h3>{country.name}</h3>
                    <p><b>Population:</b> {country.population.toLocaleString()}</p>
                    <p><b>Region:</b> {country.region}</p>
                    <p><b>Capital:</b> {country.capital}</p>
                </div>
            </div>
        </a>
    );
}

export default CountryItem;