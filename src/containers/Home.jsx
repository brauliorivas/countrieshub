import React from 'react';
import Searchbar from '@components/Searchbar';
import FilterMenu from '@components/FilterMenu';
import Filter from '@context/Filter';
import SearchName from '@context/SearchName';
import CountryItem from '@components/CountryItem';
import '@styles/Home.scss';

const API = 'https://restcountries.com/v2/all';

const Home = () => {
    const [results, setResults] = React.useState([]);
    const [filter, setFilter] = React.useState(Filter);
    const [searchName, setSearchName] = React.useState(SearchName);
    const [countries, setCountries] = React.useState([]);
    
    const handleSearch = () => {
        return results.filter(country => country.name.slice(0, searchName.length).toLowerCase() == searchName.toLowerCase());
    }

    const handleFilter = () => {
        if (filter == 'All') {
            return results;
        }
        return results.filter(country => country.region == filter);;
    }

    React.useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => {
                setResults(data);
                setCountries(data);
            });
    }, [])
    
    React.useEffect(() => {
        setCountries(handleFilter());
    }, [filter])
    
    React.useEffect(() => {
        setCountries(handleSearch());
    }, [searchName])

    return (
        <>
            <Filter.Provider value={[filter, setFilter]}>
                <SearchName.Provider value={[searchName, setSearchName]}>
                    <section className="searching-bar">
                        <Searchbar />
                        <FilterMenu />
                    </section>
                    <section className="content">
                        {countries.map(country => typeof(country) == "object" ? <CountryItem key={country.alpha2Code} country={country}/> : null)}
                    </section>
                </SearchName.Provider>
            </Filter.Provider>
        </>
    );
}

export default Home;