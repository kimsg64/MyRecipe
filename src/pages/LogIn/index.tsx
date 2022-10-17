import React, { useCallback, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import GuestLayout from '@layouts/GuestLayout';

import useInput from '@hooks/useInput';
import { login } from '@utils/firebase';
import { useUserContext } from '@contexts/UserProvider';

import { Button, Error, Form, SubHeader, Input, Label, LinkContainer } from '@pages/SignUp/style';

const LogIn = () => {
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [loginError, setLoginError] = useState('');
    const { currentUser } = useUserContext();

    const onSubmitForm = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setLoginError('');
            try {
                const userCredential = await login(email, password);
                console.log('userCredential: ', userCredential);
            } catch (error: any) {
                console.log(error);
                setLoginError(error.code);
            }
        },
        [email, password],
    );

    if (currentUser) {
        return <Navigate to="/search" />;
    }

    return (
        <GuestLayout>
            <SubHeader>Login</SubHeader>
            <Form onSubmit={onSubmitForm}>
                <Label>
                    <span>Email</span>
                    <div>
                        <Input type="email" id="email" value={email} onChange={onChangeEmail} />
                    </div>
                </Label>
                <Label>
                    <span>Password</span>
                    <div>
                        <Input type="password" id="password" value={password} onChange={onChangePassword} />
                    </div>
                    {loginError && <Error>로그인 실패({loginError})!</Error>}
                </Label>
                <LinkContainer>
                    <Link to="/signup">회원가입</Link>
                </LinkContainer>
                <Button type="submit">Login!</Button>
            </Form>
        </GuestLayout>
    );
};

export default LogIn;
