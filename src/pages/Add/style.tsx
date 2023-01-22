import styled from '@emotion/styled';
import { Button, Form, Input, Label } from '@pages/SignUp/style';

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const WideForm = styled(Form)`
    width: 800px;
    max-width: 800px;

    & textarea {
        resize: none;
        height: 200px;
        overflow: hidden;
    }
`;

export const SmallButton = styled(Button)`
    width: 48%;
`;

export const LabelsGroup = styled(Label)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;

    & span {
        padding-bottom: 0;
        line-height: 1;
    }

    & input {
        width: 160px;
        margin: 0;
    }

    & button {
        width: 120px;
        margin: 0;
    }
`;

export const ListWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-bottom: 16px;
`;

/**
 * hsl code
 * Hue: 컬러(0~360)
 * Satuation: 50이 원색
 * Lightness: 0이 검은색, 50이 원색, 100이 흰색
 */
export const ListItem = styled.span((props) => ({
    width: 'auto',
    marginRight: '8px',
    marginBottom: '4px',
    padding: '4px 8px',
    fontSize: '12px',
    fontWeight: 'bold',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderRadius: '4px',
    borderColor: `hsl(${props.color}, 50%, 50%)`,
    backgroundColor: `hsl(${props.color}, 50%, 90%)`,
    color: `hsl(${props.color}, 50%, 50%)`,
}));

export const CustomSwiper = {
    width: '100%',
    height: '240px',
    paddingBottom: '12px',
};

export const CustomSwiperSlide = {
    width: '200px',
    display: 'block',
    border: '1px solid black',
    borderRadius: '4px',
    padding: '12px',
    overflow: 'hidden',
};

export const SlideBackground = styled.span((props) => ({
    width: '100%',
    height: '100%',
    background: `url(${props.url})`,
}));

export const SildeTitle = styled.span`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 4px;
    height: 24px;
`;

export const SlideDescription = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    line-height: 1.2em;
    height: 9.6em;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 8;
    margin: 1em 0;

    &:hover {
        cursor: pointer;
    }
`;

export const TextArea = Input.withComponent('textarea');
