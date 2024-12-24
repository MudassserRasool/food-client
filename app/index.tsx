import FullScreenLoader from '@/components/FullScreenLoader';
import { gestToken } from '@/constants';
import ROLES from '@/constants/roles';
import ROUTES from '@/constants/routes';
import { initializeAuth } from '@/redux/features/auth/authSlice';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import StarterScreen from './auth/StarterScreen';

const Index = () => {
  const { token, role } = useSelector((state) => state.auth);
  const dispatch = useDispatch<any>();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // Handle initial authentication check
  useEffect(() => {
    const initialize = async () => {
      try {
        await dispatch(initializeAuth());
      } catch (error) {
        console.error('Failed to initialize auth:', error);
      } finally {
        setLoading(false);
      }
    };
    initialize();
  }, [dispatch]);

  // Handle navigation based on auth state
  useEffect(() => {
    let targetRoute = ROUTES.LOGIN; // Default route

    if (token) {
      if (token === gestToken && role === ROLES.GEST) {
        targetRoute = ROUTES.CUSTOMER_HOME;
      } else if (role === ROLES.CUSTOMER && token !== gestToken) {
        targetRoute = ROUTES.CUSTOMER_HOME;
      } else if (role === ROLES.RIDER && token !== gestToken) {
        targetRoute = ROUTES.RIDER_HOME;
      }

      try {
        router.replace(targetRoute);
      } catch (error) {
        console.error('Navigation failed:', error);
      }
    }
  }, [token, role, router]);

  if (loading) {
    return <FullScreenLoader visible={true} message="Initializing app..." />;
  }

  return <StarterScreen />;
};

export default Index;

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
