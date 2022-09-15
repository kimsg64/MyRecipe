import styled from '@emotion/styled';

export const PageWrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding-top: 64px;
`;

export const MainContainer = styled.main`
    width: 100vw;
    min-width: calc(100vh - 64px);
`;
