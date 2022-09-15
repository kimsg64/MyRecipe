import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TopHeader } from './style';
import { getLoginStatus } from '@src/firebase';
import gravatar from 'gravatar';
import SubMenu from '../SubMenu/inedx';

const TopNav = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isOpenProfile, setIsOpenProfile] = useState(false);

    useEffect(() => {
        try {
            getLoginStatus(setIsLoggedIn);
        } catch (error: any) {
            console.log(error);
        }
    }, []);

    const onClickProfile = useCallback(() => {
        setIsOpenProfile((prev) => !prev);
    }, []);

    return (
        <TopHeader>
            <section>
                <span>🍔</span>
            </section>
            <section>
                <Link to="/">MyRecipe</Link>
            </section>
            <section>
                {isLoggedIn ? (
                    <span onClick={onClickProfile}>
                        <img src={gravatar.url('email', { s: '36px', d: 'retro' })} alt={'user'} />
                    </span>
                ) : (
                    <span>
                        <Link to="/login">Login</Link>
                    </span>
                )}
                {isOpenProfile && <SubMenu isOpenProfile={isOpenProfile} onClickProfile={onClickProfile} />}
            </section>
        </TopHeader>
    );
};

export default TopNav;
