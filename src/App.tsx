// react & react-router
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// components
import LogIn from '@pages/LogIn';
import SignUp from '@pages/SignUp';
import Search from '@pages/Search';
import Add from '@pages/Add';

// utils
import { UserProvider, useUserContext } from '@contexts/UserProvider';

// libs
import { Scrollbars } from 'react-custom-scrollbars';

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
            <Scrollbars style={{ width: '100vw', height: '100vh' }}>
                <Routes>
                    <Route path="/" element={isLoggedIn ? <Search /> : <LogIn />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/signup" element={<SignUp />} />

                    <Route path="/search-recipe" element={<Search />} />
                    <Route path="/add-recipe" element={<Add />} />
                </Routes>
            </Scrollbars>
        </UserProvider>
    );
}

export default App;
