import { Routes, Route } from 'react-router-dom';

import SignUp from '@pages/SignUp';
import LogIn from '@pages/LogIn';
import Main from '@pages/Main';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
  );
}

export default App;
