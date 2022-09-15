import { useCallback, useState } from 'react';
import { Button, Error, Form, Header, Input, Label, LinkContainer, Success } from '@pages/SignUp/style';
import { login } from '@src/firebase';
import { Navigate } from 'react-router-dom';
import useInput from '@hooks/useInput';
import DefaultLayout from '@src/layouts/DefaultLayout';
import { Link } from 'react-router-dom';

const LogIn = () => {
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [loginError, setLoginError] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false);

    const onSubmitForm = useCallback(
        async (e: any) => {
            e.preventDefault();
            setLoginSuccess(false);
            setLoginError('');
            try {
                const userCredential = await login(email, password);
                // console.log('userCredential: ', userCredential);
                setLoginSuccess(true);
            } catch (error: any) {
                // console.log('error occured! ', error.code);
                setLoginError(error.code);
            }
        },
        [email, password],
    );

    if (loginSuccess) {
        return <Navigate to="/" />;
    }

    return (
        <DefaultLayout>
            <Header>Login</Header>
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
                    {loginSuccess && <Success>로그인 성공!</Success>}
                </Label>
                <LinkContainer>
                    <Link to="/signup">회원가입</Link>
                </LinkContainer>
                <Button type="submit">Login!</Button>
            </Form>
        </DefaultLayout>
    );
};

export default LogIn;
