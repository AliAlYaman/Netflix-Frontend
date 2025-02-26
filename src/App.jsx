import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoadingSpinner from './components/LoadingSpinner'; // Import a loading spinner component
import PrivateRoute from './components/PrivateRoute';

// Lazy load the components
const LandingPage = lazy(() => import('./pages/LandingPage'));
const Login = lazy(() => import('./pages/Login'));


function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<LandingPage />} />
          </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;