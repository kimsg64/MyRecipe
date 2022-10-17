import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import SubMenu from '@components/SubMenu/inedx';

import gravatar from 'gravatar';

import { useUserContext } from '@contexts/UserProvider';

import { HamburgerIcon, TopHeader } from './style';

interface Props {
    onClickHamburger: () => void;
}

const TopNav = (props: Props) => {
    const [isOpenProfile, setIsOpenProfile] = useState(false);
    const { currentUser } = useUserContext();
    const email = currentUser?.email ?? '';

    const onClickProfile = useCallback(() => {
        setIsOpenProfile((prev) => !prev);
    }, []);

    return (
        <TopHeader>
            <section>{currentUser && <HamburgerIcon onClick={props.onClickHamburger} />}</section>
            <section>
                <Link to={currentUser ? '/search' : '/'}>MyRecipe</Link>
            </section>
            <section>
                {currentUser ? (
                    <>
                        <span onClick={onClickProfile}>
                            <img src={gravatar.url(email, { s: '36px', d: 'retro' })} alt={email} />
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
