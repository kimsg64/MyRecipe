import useInput from '@hooks/useInput';
import { Form, Input } from '@pages/SignUp/style';
import DefaultLayout from '@layouts/DefaultLayout';
import { useCallback } from 'react';
import { useUserContext } from '@contexts/UserProvider';
import { Navigate } from 'react-router-dom';

const Search = () => {
    const [keyword, onChangeKeyword] = useInput('');
    const { currentUser } = useUserContext();

    const onSubmitForm = useCallback((e: any) => {
        e.preventDefault();
        // get data from firebase
    }, []);

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    return (
        <DefaultLayout>
            <Form onSubmit={onSubmitForm}>
                <Input type="text" value={keyword} onChange={onChangeKeyword} />
            </Form>
        </DefaultLayout>
    );
};

export default Search;
