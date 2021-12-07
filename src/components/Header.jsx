import React from 'react';
import Mode from '@context/Mode';
import '@styles/Header.scss';

const lightTheme = {
    "--background-color": "hsl(0, 0%, 100%)",
    "--header-title-color": "hsl(0, 0%, 0%)",
    "--input-color": "hsl(0, 0%, 87%)",
    "--bg-color": "hsl(0, 0%, 98%)",
    "--border-countries": "hsl(0, 0%, 20%)",
    "--box-shadow": "rgba(149, 157, 165, 0.2) 0px 8px 24px",

}

const darkTheme = {
    "--background-color": "hsl(210, 22%, 22%)",
    "--header-title-color": "hsl(0, 0%, 100%)",
    "--input-color": "hsl(0, 0%, 100%)",
    "--bg-color": "hsl(207, 26%, 17%)",
    "--border-countries": "hsl(207, 11%, 70%)",
    "--box-shadow": "none",
}

const applyTheme = (nextTheme) => {
    if (nextTheme == 'Light') {
        Object.keys(lightTheme).map(key => {
            const value = lightTheme[key];
            document.documentElement.style.setProperty(key, value);
        })
    } else {
        Object.keys(darkTheme).map(key => {
            const value = darkTheme[key];
            document.documentElement.style.setProperty(key, value);
        })
    }
}

const Header = () => {
    const {mode, handleTheme} = React.useContext(Mode);

    const handleDark = () => {
        const newTheme = mode === 'Light' ? 'Dark' : 'Light';
        applyTheme(newTheme)
        handleTheme(newTheme);
    }

    React.useEffect(() => {
        applyTheme(mode)
    }, [])

    return (
        <header className="header">
            <a className="header__home-link" href="/">
                <h1 className="header__home-link--title">Where in the World?</h1>
            </a>
            <div onClick={handleDark} className="header__mode">
                <i className="far fa-moon header__mode--icon"></i>
                <p className="header__mode--dark-mode">{mode} Mode</p>
            </div>
        </header>
    );
}

export default Header;

// "--white": "hsl(0, 0%, 0%)",
// "--black": "hsl(0, 0%, 100%)",
// // "--very-light-grey": "hsl(207, 26%, 17%)",
// //
// "--dark-blue": "hsl(209, 23%, 22%)",
// "--very-dark-blue__dark-mode": "hsl(207, 26%, 17%)",
// "--very-dark-blue__light-mode": "hsl(200, 15%, 8%)",
// "--dark-grey": "hsl(0, 0%, 52%)",
// "--very-light-grey": "hsl(0, 0%, 98%)",
// "--white": "hsl(0, 0%, 100%)",
// "--black": "hsl(0, 0%, 0%)",
//