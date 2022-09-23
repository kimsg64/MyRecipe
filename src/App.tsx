import { Routes, Route } from 'react-router-dom';

import SignUp from '@pages/SignUp';
import LogIn from '@pages/LogIn';
import Home from '@pages/Home';
import Loading from '@pages/Loading';
import { useEffect, useState } from 'react';

function App() {
    const [isLoading, setIsLoading] = useState(false);

    const getApi = async (fnc) => {
        try {
            return await fnc();
        } catch (error) {
            console.log('error occured!', error);
        }
    };

    useEffect(() => {
        // getApi();
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
        </Routes>
        //     )}
        // </>
    );
}

export default App;
