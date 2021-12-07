import React from 'react';
import Filter from '@context/Filter';
import '@styles/FilterMenu.scss';

const FilterMenu = () => {
    const [filter, setFilter] = React.useContext(Filter);
    const [showFilter, setShowFilter] = React.useState(false);

    React.useEffect(() => {
        setFilter("All");
    }, [])

    const handleClick = (e) => {
        setFilter(e.target.innerText)
    }

    const handleClickShow = () => {
        setShowFilter(!showFilter);
    }

    return (
        <>
            <button type="button" className="filter-menu__button">Filter by Region<i className="fas fa-angle-down" onClick={handleClickShow}></i></button>
            {showFilter && (<nav className="filter-menu__options">
                <ul onClick={handleClick}>
                    <li >Africa</li>
                    <li >Americas</li>
                    <li >Asia</li>
                    <li >Europe</li>
                    <li >Oceania</li>
                    <li >All</li>
                </ul>
            </nav>)}
        </>
    );
}

export default FilterMenu;