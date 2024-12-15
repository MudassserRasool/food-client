import { gestToken } from '@/constants';
import ROLES from '@/constants/roles';
import ROUTES from '@/constants/routes';
import { initializeAuth } from '@/redux/features/auth/authSlice';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import StarterScreen from './auth/StarterScreen';

const index = () => {
  const { token, role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  console.log('token', token);
  console.log('role', role);
  useEffect(() => {
    dispatch(initializeAuth()); // Check for token on app load
  }, [dispatch]);
  useEffect(() => {
    if (token) {
      if (token === gestToken && role === ROLES.GEST) {
        return router.push(ROUTES.CUSTOMER_HOME);
      } else if (role === ROLES.CUSTOMER && token !== gestToken) {
        return router.push(ROUTES.CUSTOMER_HOME);
      } else if (role === ROLES.RIDER && token !== gestToken) {
        return router.push(ROUTES.RIDER_HOME);
      }
    }
  }, [token, role]);

  return <StarterScreen />;
};

export default index;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
