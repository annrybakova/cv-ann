import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/home';
import InnerPage from './pages/Inner/inner';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/inner" element={<InnerPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
