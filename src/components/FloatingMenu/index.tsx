import React, { useCallback } from 'react';

import { logout } from '@utils/firebase';
import { useUserContext } from '@contexts/UserProvider';

import { BackDrop, SubMenuContainer } from './style';

interface FloatingMenuProps {
    onClickProfile: () => void;
}

const FloatingMenu = ({ onClickProfile }: FloatingMenuProps) => {
    const { currentUser } = useUserContext();

    const stopPropagation = useCallback((e: React.MouseEvent<HTMLUListElement>) => {
        e.stopPropagation();
    }, []);

    const onClickLogout = useCallback(() => {
        logout();
        onClickProfile();
    }, [onClickProfile]);

    return (
        <BackDrop onClick={onClickProfile}>
            <SubMenuContainer onClick={stopPropagation} top="40px" right="0">
                <li>{`${currentUser?.email} 님`}</li>
                <li>프로필 변경</li>
                <li>What can I do?</li>
                <li onClick={onClickLogout}>로그아웃</li>
            </SubMenuContainer>
        </BackDrop>
    );
};

export default FloatingMenu;
