import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { checkLoginStatus, logout } from '@src/firebase';
import { Button } from '../SignUp/style';

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(Object);

  useEffect(() => {
    try {
      checkLoginStatus(setIsLoggedIn);
      const auth = getAuth();
      setCurrentUser(auth.currentUser);
      // console.log('is logged in?', auth.currentUser);
    } catch (error: any) {
      // console.log(error);
    }
  }, [isLoggedIn, currentUser]);

  const onClickLogout = () => {
    logout();
    setIsLoggedIn(false);
  };

  if (isLoggedIn && currentUser) {
    return (
      <div>
        {currentUser.email} 로그인함
        <Button onClick={onClickLogout}>로그아웃</Button>
      </div>
    );
  }

  return (
    <div>
      메인 페이지
      <div>
        <Link to="/login">로그인</Link>
      </div>
      <div>
        <Link to="/signup">회원가입</Link>
      </div>
    </div>
  );
};

export default Main;
