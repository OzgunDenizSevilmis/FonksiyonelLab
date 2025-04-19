import React, { useState } from 'react';
import LoginScreen from './login';
import RegisterScreen from './register';
import MainScreen from './mainscreen';
import ProfileScreen from './profile';
import PasswordResetScreen from './passwordreset';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Login');
  const [userEmail, setUserEmail] = useState('');

  const changeScreen = (screen, params = {}) => {
    if (params.email) {
      setUserEmail(params.email);
    }
    setCurrentScreen(screen);
  };

  switch (currentScreen) {
    case 'Login':
      return <LoginScreen changeScreen={changeScreen} />;
    case 'Register':
      return <RegisterScreen changeScreen={changeScreen} />;
    case 'Main':
      return <MainScreen changeScreen={changeScreen} />;
    case 'Profile':
      return <ProfileScreen changeScreen={changeScreen} email={userEmail} />;
    case 'PasswordReset':
      return <PasswordResetScreen changeScreen={changeScreen} />;
    default:
      return null;
  }
}