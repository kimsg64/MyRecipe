import React, { useState } from 'react';
import { Form, Header, Input, Label, Wrapper } from './style';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  return (
    <Wrapper>
      <Header>SIGN UP</Header>
      <Form>
        <Label>
          <span>Email</span>
          <div>
            <Input type="email" id="email" value={email} />
          </div>
        </Label>
        <Label>
          <span>NickName</span>
          <div>
            <Input type="text" id="nickname" value={nickname} />
          </div>
        </Label>
        <Label>
          <span>Password</span>
          <div>
            <Input type="password" id="password" value={password} />
          </div>
        </Label>
        <Label>
          <span>Password Check</span>
          <div>
            <Input type="password" id="passwordCheck" value={passwordCheck} />
          </div>
        </Label>
      </Form>
    </Wrapper>
  );
};

export default SignUp;
