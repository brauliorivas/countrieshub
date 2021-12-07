import React from 'react';

const useMode = () => {
    const prevMode = localStorage.getItem('mode');
    const [mode, setMode] = React.useState(prevMode || 'Light');
    
    const handleTheme = (newTheme) => {
        setMode(newTheme);
        localStorage.setItem('mode', newTheme);
    }

    return {
        mode,
        handleTheme,
    }
}

export default useMode;