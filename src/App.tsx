import { Routes, Route } from 'react-router-dom';

import { useEffect, useState } from 'react';
import Home from '@pages/Home';
import Loading from '@pages/Loading';

import SignUp from '@pages/SignUp';
import LogIn from '@pages/LogIn';

import Search from '@pages/Search';
import Record from '@pages/Record';
import History from '@pages/History';
import Analyzed from '@pages/Analyzed';

function App() {
    const [isLoading, setIsLoading] = useState(false);

    const getApi = async (fnc: () => void) => {
        try {
            return await fnc();
        } catch (error) {
            console.log('error occured!', error);
        }
    };

    useEffect(() => {
        // const isloaded = getApi();
    }, []);

    return (
        // <>
        //     {isLoading ? (
        //         <Loading />
        //     ) : (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />

            <Route path="/search" element={<Search />} />
            <Route path="/record" element={<Record />} />
            <Route path="/history" element={<History />} />
            <Route path="/analyzed" element={<Analyzed />} />
        </Routes>
        //     )}
        // </>
    );
}

export default App;
