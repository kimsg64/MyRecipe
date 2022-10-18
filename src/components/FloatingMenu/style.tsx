import styled from '@emotion/styled';

export const BackDrop = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1000;

    & ul {
        position: absolute;
        padding: 0;
        display: inline-block;
        --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
        box-shadow: 0 0 0 1px var(--saf-0), 0 4px 12px 0 rgba(0, 0, 0, 0.12);
        background-color: rgba(var(--sk_foreground_min_solid, 248, 248, 248), 1);
        border-radius: 6px;
        user-select: none;
        min-width: 360px;
        z-index: 512;
        max-height: calc(100vh - 20px);
        color: rgb(29, 28, 29);
        padding-top: 12px;
    }

    & ul li {
        list-style: none;
        font-size: 18px;
        padding: 12px 24px;
    }
    & ul li:first-of-type {
        text-align: center;
        font-weight: bold;
        font-size: 20px;
        color: rgb(240, 180, 90);
    }
    & ul li:hover:not(:first-of-type) {
        cursor: pointer;
        background-color: rgb(255 255 225);
    }
`;

type PositionProps = {
    top: string;
    right: string;
};
export const SubMenuContainer = styled.ul<PositionProps>`
    top: ${(props) => props.top};
    right: ${(props) => props.right};
`;
