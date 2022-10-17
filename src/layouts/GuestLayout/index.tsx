import React, { useCallback, useState } from 'react';
import TopNav from '@components/TopNav';
import { BodyWrapper, MainContainer, PageWrapper } from '@layouts/DefaultLayout/style';

interface Props {
    children: React.PropsWithChildren;
}

const GuestLayout = (props: React.PropsWithChildren<Props>) => {
    const [isOpenHamburgerMenu, setIsOpenHamburgerMenu] = useState(false);

    const onClickHamburger = useCallback(() => {
        setIsOpenHamburgerMenu((prev) => !prev);
    }, []);

    return (
        <PageWrapper>
            <TopNav onClickHamburger={onClickHamburger} />
            <BodyWrapper>
                <MainContainer show={isOpenHamburgerMenu}>{props.children}</MainContainer>
            </BodyWrapper>
        </PageWrapper>
    );
};
export default GuestLayout;
