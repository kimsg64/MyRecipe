import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HamburgerIcon, TopHeader } from './style';
import gravatar from 'gravatar';
import { getLoginStatus } from '@utils/firebase';
import SubMenu from '@components/SubMenu/inedx';

interface Props {
    onClickHamburger: () => void;
}

const TopNav = (props: Props) => {
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
                <HamburgerIcon onClick={props.onClickHamburger} />
            </section>
            <section>
                <Link to="/">MyRecipe</Link>
            </section>
            <section>
                {isLoggedIn ? (
                    <>
                        <span onClick={onClickProfile}>
                            <img src={gravatar.url('email', { s: '36px', d: 'retro' })} alt={'user'} />
                        </span>
                    </>
                ) : (
                    <span>
                        <Link to="/login">Login</Link>
                    </span>
                )}
                {isOpenProfile && <SubMenu onClickProfile={onClickProfile} />}
            </section>
        </TopHeader>
    );
};

export default TopNav;
