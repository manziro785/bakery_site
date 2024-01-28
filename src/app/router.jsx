import {createBrowserRouter} from 'react-router-dom';
import { LoginPage } from '../pages/login.jsx';
import { ProfilePage } from '../pages/profile.jsx';
import { NoPage } from '../pages/noPage.jsx';
import { SignupPage } from '../pages/signup.jsx';
import { HomePage } from '../pages/homePage.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/login',
    element: <LoginPage />
    
  },
  {
    path: '/profile',
    element: <ProfilePage />
  },
  {
    path: '/registration',
    element: <SignupPage />
  },
  {
    path: '/*',
    element: <NoPage />
  }
])