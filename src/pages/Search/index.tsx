import useInput from '@hooks/useInput';
import { Form, Input } from '@pages/SignUp/style';
import DefaultLayout from '@layouts/DefaultLayout';
import { useCallback } from 'react';

const Search = () => {
    const [keyword, onChangeKeyword] = useInput('');

    const onSubmitForm = useCallback((e: any) => {
        e.preventDefault();
        // get data from firebase
    }, []);

    return (
        <DefaultLayout>
            <Form onSubmit={onSubmitForm}>
                <Input type="text" value={keyword} onChange={onChangeKeyword} />
            </Form>
        </DefaultLayout>
    );
};

export default Search;
