import React from 'react';
import SearchName from '@context/SearchName';
import '@styles/Searchbar.scss';

const Searchbar = () => {
    const [searchName, setSearchName] = React.useContext(SearchName);

    const handleInput = (event) => {
        setSearchName(event.target.value);
    }

    return (
        <div className="search-bar">
            <i className="fas fa-search"></i>
            <input type="text" onChange={event => handleInput(event)}placeholder="Search for a country..." className="search-bar__input"></input>
        </div>
    );
}

export default Searchbar;