import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import gravatar from 'gravatar';

import { useUserContext } from '@contexts/UserProvider';

import { HamburgerIcon, HeaderContainer } from './style';
import FloatingMenu from '@components/FloatingMenu';

interface HeaderProps {
    onClickHamburger?: () => void;
}

const Header = ({ onClickHamburger }: HeaderProps) => {
    const [isOpenProfile, setIsOpenProfile] = useState(false);
    const { currentUser } = useUserContext();
    const email = currentUser?.email ?? '';

    const onClickProfile = useCallback(() => {
        setIsOpenProfile((prev) => !prev);
    }, []);

    return (
        <HeaderContainer>
            <section>{currentUser && <HamburgerIcon onClick={onClickHamburger} />}</section>
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
                {isOpenProfile && <FloatingMenu onClickProfile={onClickProfile} />}
            </section>
        </HeaderContainer>
    );
};

export default Header;
