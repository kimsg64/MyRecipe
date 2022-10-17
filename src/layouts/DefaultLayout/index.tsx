import TopNav from '@components/TopNav';
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { BodyWrapper, HamburgerMenu, MainContainer, PageWrapper } from './style';

interface Props {
    children: React.PropsWithChildren;
}

const DefaultLayout = (props: React.PropsWithChildren<Props>) => {
    const [isOpenHamburgerMenu, setIsOpenHamburgerMenu] = useState(false);

    const onClickHamburger = useCallback(() => {
        setIsOpenHamburgerMenu((prev) => !prev);
    }, []);

    const onClickNavMenu = useCallback((e: any) => {
        return <Link to={`/${e.currentTarget.dataset.mode}`} />;
    }, []);

    return (
        <PageWrapper>
            <TopNav onClickHamburger={onClickHamburger} />
            <BodyWrapper>
                <HamburgerMenu show={isOpenHamburgerMenu}>
                    <li onClick={onClickNavMenu} data-mode="search">
                        레시피 검색
                    </li>
                    <li onClick={onClickNavMenu} data-mode="record">
                        저장된 레시피
                    </li>
                    <li onClick={onClickNavMenu} data-mode="history">
                        요리 기록
                    </li>
                    <li onClick={onClickNavMenu} data-mode="analyzed">
                        입맛 분석
                    </li>
                </HamburgerMenu>
                <MainContainer show={isOpenHamburgerMenu}>{props.children}</MainContainer>
            </BodyWrapper>
        </PageWrapper>
    );
};
export default DefaultLayout;
