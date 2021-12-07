import React from 'react';
import CountryBorder from '@components/CountryBorder';
import '@styles/Country.scss';

const Country = () => {
    const [border, setBorder] = React.useState([]);
    const country = JSON.parse(localStorage.getItem('country'));

    const borderCountries = async () => {
        let borderCountries = [];
        for (let i of country.borders) {
            const response = await fetch(`https://restcountries.com/v3.1/alpha/${i.toLowerCase()}`);
            const data = await response.json();
            borderCountries.push(data[0].name.common);
        };
        setBorder(borderCountries);
    }

    React.useEffect(() => {
        if (country.borders) {
            borderCountries();
        }
    }, [])

    const currenciesList = country.currencies.map(currency => ` ${currency.symbol} ${currency.name}`);
    const languagesList = country.languages.map(language => ` ${language.name}`);

    return (
        <section className="country">
            <img src={country.flag} alt={country.name} />
            <div className="country__info">
                <div className="general__data">
                    <div className="left-col">
                        <h3>{country.name}</h3>
                        <p className="data"><span>Native Name:</span> {country.nativeName}</p>
                        <p className="data"><span>Population:</span> {country.population}</p>
                        <p className="data"><span>Region:</span> {country.region}</p>
                        <p className="data"><span>Sub Region:</span> {country.subregion}</p>
                        <p className="data"><span>Capital:</span> {country.capital}</p>
                    </div>
                    <div className="right-colr"> 
                        <div className="country__info--other">
                            <p className="data"><span>Top Level Domain:</span> {country.topLevelDomain}</p>
                            <p className="data">
                                <span>Currencies:</span>
                                {currenciesList.join(', ')}
                            </p>
                            <p className="data">
                                <span>Languages:</span>
                                {languagesList.join(', ')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bord">
                    <p className="country__info--border">Border Countries:</p>
                    <div className="country__info--border-countries">
                        {border.length > 0 ? border.map(country => <CountryBorder key={country} name={country} />) : <CountryBorder name="None" />}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Country;