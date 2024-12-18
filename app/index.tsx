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
  }, [dispatch, token]);

  useEffect(() => {
    // if (!router || !token) {
    //   console.log('Navigating to LOGIN');
    //  ;
    //   return;
    // }
    console.log('token', token);
    console.log(role);

    if (token)
      if (token === gestToken && role === ROLES.GEST) {
        console.log('Navigating to CUSTOMER_HOME as GEST');
        setTimeout(() => {
          router.replace(ROUTES.CUSTOMER_HOME);
        }, 1000);
      } else if (role === ROLES.CUSTOMER && token !== gestToken) {
        console.log('Navigating to CUSTOMER_HOME as CUSTOMER');
        setTimeout(() => {
          router.replace(ROUTES.CUSTOMER_HOME);
        }, 1000);
      } else if (role === ROLES.RIDER && token !== gestToken) {
        setTimeout(() => {
          router.replace(ROUTES.RIDER_HOME);
        }, 1000);
      } else {
        setTimeout(() => {
          router.replace(ROUTES.LOGIN);
        }, 1000);
      }
  }, [token, role, router]);

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

// eas build -p android --profile preview
