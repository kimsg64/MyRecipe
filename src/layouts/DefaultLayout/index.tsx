import TopNav from '@src/components/TopNav';
import { useCallback, useState } from 'react';
import { BodyWrapper, HamburgerMenu, MainContainer, PageWrapper } from './style';

interface Props {
    children: React.PropsWithChildren;
}

const DefaultLayout = (props: React.PropsWithChildren<Props>) => {
    const [isOpenHamburgerMenu, setIsOpenHamburgerMenu] = useState(false);

    const onClickHamburger = useCallback(() => {
        setIsOpenHamburgerMenu((prev) => !prev);
    }, []);

    return (
        <PageWrapper>
            <TopNav onClickHamburger={onClickHamburger} />
            <BodyWrapper>
                <HamburgerMenu show={isOpenHamburgerMenu}>
                    <li>레시피 검색</li>
                    <li>저장된 레시피</li>
                    <li>요리 기록</li>
                    <li>입맛 분석</li>
                </HamburgerMenu>
                <MainContainer show={isOpenHamburgerMenu}>{props.children}</MainContainer>
            </BodyWrapper>
        </PageWrapper>
    );
};
export default DefaultLayout;
