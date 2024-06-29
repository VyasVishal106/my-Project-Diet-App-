import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/auth/SingUp';
import Login from './components/auth/Login';
import { AuthProvider } from './contexts/authContext';
import Home from './components/Home/Home';
import Zero from './components/Zero/Zero';
import UserProfile from './components/Home/UserProfile/UserProfile';
import Diet from './components/Home/dietRecommended/Diet';
import Food from './components/Home/Food/Food';
import TodayMeal from './components/Home/Today Meal/TodayMeal';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Zero />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Home' element={<Home />}>
            <Route index element={<UserProfile />} />
            <Route path='Diet' element={<Diet />} />
            <Route path='Food' element={<Food />} />
            <Route path="Today's Meal" element={<TodayMeal />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
