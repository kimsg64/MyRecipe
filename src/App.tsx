import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SignUp from 'src/pages/SignUp';
import LogIn from 'src/pages/LogIn';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
  );
}

export default App;
