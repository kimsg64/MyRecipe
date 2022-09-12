import { doc } from 'firebase/firestore/lite';
import { db } from 'src/firebase';
import React, { useCallback, useState } from 'react';
import { Button, Form, Header, Input, Label, Wrapper } from './style';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [mismatchError, setMismatchError] = useState(false);

  const onChangeEmail = useCallback((e: any) => {
    setEmail(e.target.value);
  }, []);

  const onChangeNickname = useCallback((e: any) => {
    setNickname(e.target.value);
  }, []);

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
    (e: any) => {
      e.preventDefault();

      if (mismatchError) {
        console.log('password mismatched!');
      } else {
        const user = doc(db, 'user', 'email');
        console.log('user: ', user);
        console.log(
          `post them! email: ${email}, nickname: ${nickname}, password: ${password}, passwordCheck: ${passwordCheck}`,
        );
      }
    },
    [email, nickname, password, passwordCheck, mismatchError],
  );

  return (
    <Wrapper>
      <Header>SIGN UP</Header>
      <Form onSubmit={onSubmitForm}>
        <Label>
          <span>Email</span>
          <div>
            <Input type="email" id="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label>
          <span>NickName</span>
          <div>
            <Input type="text" id="nickname" value={nickname} onChange={onChangeNickname} />
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
            <Input type="password" id="passwordCheck" value={passwordCheck} onChange={onChangePasswordCheck} />
          </div>
        </Label>
        <Button type="submit">Sing Up!</Button>
      </Form>
    </Wrapper>
  );
};

export default SignUp;
