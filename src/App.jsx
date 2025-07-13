import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const AppRoutes = lazy(() => import('./routes/AppRoutes'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes />
      </Suspense>
    </Router>
  );
};

export default App;
