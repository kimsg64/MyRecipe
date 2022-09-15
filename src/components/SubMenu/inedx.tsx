import { useCallback } from 'react';
import { CreateSubMenu } from './style';

interface Props {
    isOpenProfile: boolean;
    onClickProfile: () => void;
}

const SubMenu = (props: Props) => {
    const stopPropagation = useCallback((e: any) => {
        e.stopPropagation();
    }, []);
    return (
        <CreateSubMenu onClick={props.onClickProfile}>
            <div onClick={stopPropagation}>Menu</div>
        </CreateSubMenu>
    );
};

export default SubMenu;
