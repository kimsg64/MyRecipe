import styled from '@emotion/styled';

export const BackDrop = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.25);

    & div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 40px;
        font-weight: bold;
        user-select: none;
    }
`;
