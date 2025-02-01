import React from 'react'
import AuthRoutes from './authRoutes';
import AppRoutes from './AppRoutes';
import { useAuthContext } from '../contexts/auth';

const Routes = () => {

  const { signed } = useAuthContext();
  const loading = false;

  return (
    signed ? <AppRoutes/> : <AuthRoutes/>
  )
}

export default Routes;
