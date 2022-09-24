import styled from '@emotion/styled';

export const PageWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding-top: 64px;
`;
export const BodyWrapper = styled.div`
    display: flex;
    min-height: calc(100vh - 64px);
    width: 100%;
    position: relative;
`;

type mainProps = {
    show: boolean;
};

export const HamburgerMenu = styled.ul<mainProps>`
    width: ${(props) => (props.show ? '16%' : '0')};
    transition-duration: 0.5s;
    min-height: calc(100% - 64px);
    margin: 0;
    padding: 24px 0;
    background-color: rgb(255, 225, 96);
    position: relative;
    left: ${(props) => (props.show ? '0' : '-16%')};

    & li {
        width: 100%;
        padding: 12px 24px;
        font-weight: bold;
        color: rgb(40, 40, 40);
    }
    & li:hover {
        background-color: rgb(255, 254, 96);
        cursor: pointer;
    }
    & li:active {
        background-color: rgb(255, 200, 100);
    }
`;

export const MainContainer = styled.main<mainProps>`
    width: ${(props) => (props.show ? '84%' : '100%')};
    transition-duration: 0.5s;
    min-height: calc(100% - 64px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 64px;
`;
