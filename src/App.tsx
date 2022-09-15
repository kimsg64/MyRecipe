import { Routes, Route } from 'react-router-dom';

import SignUp from '@pages/SignUp';
import LogIn from '@pages/LogIn';
import Home from '@pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
  );
}

export default App;
