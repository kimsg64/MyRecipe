import TopNav from '@src/components/TopNav';
import { MainContainer, PageWrapper } from './style';

interface Props {
    children: React.PropsWithChildren;
}

const DefaultLayout = (props: React.PropsWithChildren<Props>) => {
    return (
        <PageWrapper>
            <TopNav />
            <MainContainer>{props.children}</MainContainer>
        </PageWrapper>
    );
};
export default DefaultLayout;
