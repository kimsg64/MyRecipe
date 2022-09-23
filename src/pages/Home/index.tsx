import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getLoginStatus, getUserInfo } from '@src/firebase';
import Search from '@src/layouts/WhichLayout';
import DefaultLayout from '@src/layouts/DefaultLayout';

const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState('');

    useEffect(() => {
        try {
            getLoginStatus(setIsLoggedIn);
        } catch (error: any) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        try {
            getUserInfo(setCurrentUser);
        } catch (error: any) {
            console.log(error);
        }
    }, [isLoggedIn]);

    if (isLoggedIn && currentUser) {
        return (
            <DefaultLayout>
                <div>
                    {currentUser} 로그인함
                    <Search />
                </div>
            </DefaultLayout>
        );
    }

    return (
        <DefaultLayout>
            <div>
                <Link to="/login">로그인 하러가기</Link>
            </div>
            <div>
                <Link to="/signup">회원가입</Link>
            </div>
        </DefaultLayout>
    );
};

export default Home;
