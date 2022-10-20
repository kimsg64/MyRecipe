import styled from '@emotion/styled';
import { Button } from '@pages/SignUp/style';

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SmallButton = styled(Button)`
    width: 48%;
`;

export const TempContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;

    & div {
        width: 200px;
        height: 160px;
        overflow: hidden;
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
`;

export const FileInput = styled.input`
    width: 100%;
`;
