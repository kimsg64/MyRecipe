import React from 'react';

import Header from '@components/Header';

import { BodyWrapper, MainContainer, PageWrapper } from '@layouts/DefaultLayout/style';

const GuestLayout = ({ children }: React.PropsWithChildren) => {
    return (
        <PageWrapper>
            <Header />
            <BodyWrapper>
                <MainContainer>{children}</MainContainer>
            </BodyWrapper>
        </PageWrapper>
    );
};
export default GuestLayout;
