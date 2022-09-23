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

export const HamburgerIcon = styled.span`
    background: url("data:image/svg+xml,%3C%3Fxml version='1.0' %3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg height='32px' id='Layer_1' style='enable-background:new 0 0 32 32;' version='1.1' viewBox='0 0 32 32' width='32px' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cpath d='M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2 s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2 S29.104,22,28,22z'/%3E%3C/svg%3E")
        no-repeat center center;
`;
