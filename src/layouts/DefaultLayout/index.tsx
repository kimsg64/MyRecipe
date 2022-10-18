import { PropsWithChildren, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '@components/Header';

import { BodyWrapper, HamburgerMenu, MainContainer, PageWrapper } from './style';

const DefaultLayout = ({ children }: PropsWithChildren) => {
    const [isOpenHamburgerMenu, setIsOpenHamburgerMenu] = useState(false);

    const onClickHamburger = useCallback(() => {
        setIsOpenHamburgerMenu((prev) => !prev);
    }, []);

    return (
        <PageWrapper>
            <Header onClickHamburger={onClickHamburger} />
            <BodyWrapper>
                <HamburgerMenu show={isOpenHamburgerMenu}>
                    <Link to="/search">
                        <li>레시피 검색</li>
                    </Link>
                    <Link to="/record">
                        <li>저장된 레시피</li>
                    </Link>
                    <Link to="/history">
                        <li>요리 기록</li>
                    </Link>
                    <Link to="/analyzed">
                        <li>입맛 분석</li>
                    </Link>
                </HamburgerMenu>
                <MainContainer show={isOpenHamburgerMenu}>{children}</MainContainer>
            </BodyWrapper>
        </PageWrapper>
    );
};
export default DefaultLayout;
