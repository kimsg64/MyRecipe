import { useCallback } from 'react';
import { Navigate } from 'react-router-dom';

import DefaultLayout from '@layouts/DefaultLayout';

import useInput from '@hooks/useInput';
// import { db } from '@utils/firebase';
import { useUserContext } from '@contexts/UserProvider';

import { Form, Input } from '@pages/SignUp/style';
// import { addDoc, collection } from 'firebase/firestore';

const Search = () => {
    const [keyword, onChangeKeyword] = useInput('');
    const { currentUser } = useUserContext();

    const onSubmitForm = useCallback(async (e: any) => {
        e.preventDefault();
        // get data from firebase
    }, []);

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    return (
        <DefaultLayout>
            <Form onSubmit={onSubmitForm}>
                <Input type="text" value={keyword} onChange={onChangeKeyword} placeholder="레시피를 검색하세요" />
            </Form>
        </DefaultLayout>
    );
};

export default Search;
