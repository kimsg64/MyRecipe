import styled from '@emotion/styled';

export const TopHeader = styled.header`
    width: 100vw;
    height: 64px;
    display: flex;
    justify-content: space-between;
    background-color: rgb(255, 225, 96);
    position: fixed;
    top: 0;
    user-select: none;

    & section,
    & section span {
        min-width: 64px;
        height: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
    }
    & section span:hover {
        background-color: rgb(255, 254, 96);
        cursor: pointer;
    }
    & section span:active {
        background-color: rgb(255, 200, 100);
    }

    & section a {
        font-size: 20px;
        letter-spacing: -2px;
        font-weight: bold;
        color: rgb(252 252 236);
        text-decoration: none;
    }
`;
