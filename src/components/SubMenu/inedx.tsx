import { getUserInfo, logout } from '@src/firebase';
import { useCallback, useEffect, useState } from 'react';
import { BackDrop, SubMenuContainer } from './style';

interface Props {
    onClickProfile: () => void;
}

const SubMenu = (props: Props) => {
    const [currentUser, setCurrentUser] = useState('');

    useEffect(() => {
        try {
            getUserInfo(setCurrentUser);
        } catch (error: any) {
            console.log(error);
        }
    }, []);

    const stopPropagation = useCallback((e: any) => {
        e.stopPropagation();
    }, []);

    const onClickLogout = useCallback(() => {
        logout();
    }, []);

    return (
        <BackDrop onClick={props.onClickProfile}>
            <SubMenuContainer onClick={stopPropagation} top="40px" right="0">
                <li>{`${currentUser} 님`}</li>
                <li>프로필 변경</li>
                <li>What can I do?</li>
                <li onClick={onClickLogout}>로그아웃</li>
            </SubMenuContainer>
        </BackDrop>
    );
};

export default SubMenu;
