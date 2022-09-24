import TopNav from '@src/components/TopNav';
import { useCallback, useState } from 'react';
import { BodyWrapper, HamburgerMenu, MainContainer, PageWrapper } from './style';

interface Props {
    children: React.PropsWithChildren;
}

const DefaultLayout = (props: React.PropsWithChildren<Props>) => {
    const [isOpenHamburgerMenu, setIsOpenHamburgerMenu] = useState(false);
    const [mode, setMode] = useState('search');

    const onClickHamburger = useCallback(() => {
        setIsOpenHamburgerMenu((prev) => !prev);
    }, []);

    const onClickMenu = useCallback((e) => {
        setMode(e.currentTarget.dataset.mode);
    }, []);

    return (
        <PageWrapper>
            <TopNav onClickHamburger={onClickHamburger} />
            <BodyWrapper>
                <HamburgerMenu show={isOpenHamburgerMenu}>
                    <li onClick={onClickMenu} data-mode="search">
                        레시피 검색
                    </li>
                    <li onClick={onClickMenu} data-mode="record">
                        저장된 레시피
                    </li>
                    <li onClick={onClickMenu} data-mode="history">
                        요리 기록
                    </li>
                    <li onClick={onClickMenu} data-mode="analyze">
                        입맛 분석
                    </li>
                </HamburgerMenu>
                <MainContainer show={isOpenHamburgerMenu}>{props.children}</MainContainer>
            </BodyWrapper>
        </PageWrapper>
    );
};
export default DefaultLayout;
