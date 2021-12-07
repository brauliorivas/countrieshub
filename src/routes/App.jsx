import React from 'react';
import Home from '@containers/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import CountryLayout from '@containers/CountryLayout';
import Country from '@containers/Country';
import '@styles/global.scss';
import Mode from '@context/Mode';
import useMode from '@hooks/useMode';

const App = () => {
    const useTheme = useMode(); 
    
    return (
        <Mode.Provider value={useTheme}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/country" element={<CountryLayout country={<Country />} />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </Mode.Provider>
    );
}

export default App;