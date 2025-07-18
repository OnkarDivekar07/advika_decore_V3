// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';

import HomePage from '@/pages/Home/HomePage'


const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
  );
};

export default AppRoutes;
