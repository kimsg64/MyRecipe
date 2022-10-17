import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import LogIn from '@pages/LogIn';
import SignUp from '@pages/SignUp';
import Search from '@pages/Search';

import { UserProvider, useUserContext } from '@contexts/UserProvider';

function App() {
    // check login status
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { currentUser } = useUserContext();

    useEffect(() => {
        setIsLoggedIn(false);
        if (currentUser) {
            setIsLoggedIn(true);
        }
    }, [currentUser]);

    return (
        <UserProvider>
            <Routes>
                <Route path="/" element={isLoggedIn ? <Search /> : <LogIn />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />

                <Route path="/search" element={<Search />} />
            </Routes>
        </UserProvider>
    );
}

export default App;
