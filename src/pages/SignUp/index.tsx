import { useCallback, useState } from 'react';
import { Navigate } from 'react-router-dom';

import GuestLayout from '@layouts/GuestLayout';

import useInput from '@hooks/useInput';
import { createNewUser } from '@utils/firebase';

import { Button, Error, Form, SubHeader, Input, Label, Success } from './style';

const SignUp = () => {
    const [email, onChangeEmail] = useInput('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [mismatchError, setMismatchError] = useState(false);
    const [signUpError, setSignUpError] = useState(false);
    const [signUpSuccess, setSignUpSuccess] = useState(false);

    const onChangePassword = useCallback(
        (e: any) => {
            setPassword(e.target.value);
            setMismatchError(e.target.value !== passwordCheck);
        },
        [passwordCheck],
    );

    const onChangePasswordCheck = useCallback(
        (e: any) => {
            setPasswordCheck(e.target.value);
            setMismatchError(e.target.value !== password);
        },
        [password],
    );

    const onSubmitForm = useCallback(
        async (e: any) => {
            e.preventDefault();

            if (mismatchError) {
                console.log('password mismatched!');
            } else {
                setSignUpSuccess(false);
                setSignUpError(false);
                try {
                    const userCredential = await createNewUser(email, password);
                    const user = userCredential.user;
                    console.log(`new user:`, user);
                    setSignUpSuccess(true);
                } catch (error: any) {
                    console.log('error occured!: ', error);
                    setSignUpError(true);
                }
            }
        },
        [email, password, mismatchError],
    );

    if (signUpSuccess) {
        return <Navigate to="/login" />;
    }

    return (
        <GuestLayout>
            <SubHeader>SIGN UP</SubHeader>
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
                </Label>
                <Label>
                    <span>Password Check</span>
                    <div>
                        <Input
                            type="password"
                            id="passwordCheck"
                            value={passwordCheck}
                            onChange={onChangePasswordCheck}
                        />
                    </div>
                    {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
                    {signUpError && <Error>회원가입에 실패했습니다.</Error>}
                    {signUpSuccess && <Success>회원가입 성공! 로그인 페이지로 이동합니다.</Success>}
                </Label>
                <Button type="submit">Sing Up!</Button>
            </Form>
        </GuestLayout>
    );
};

export default SignUp;
