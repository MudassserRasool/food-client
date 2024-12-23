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
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for token on app load
    const initialize = async () => {
      setLoading(true); // Show loader
      await dispatch(initializeAuth());
      setLoading(false); // Hide loader after dispatch
    };
    initialize();
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      setLoading(true); // Show loader while processing navigation
      if (token === gestToken && role === ROLES.GEST) {
        setTimeout(() => router.replace(ROUTES.CUSTOMER_HOME), 50);
      } else if (role === ROLES.CUSTOMER && token !== gestToken) {
        setTimeout(() => router.replace(ROUTES.CUSTOMER_HOME), 50);
      } else if (role === ROLES.RIDER && token !== gestToken) {
        setTimeout(() => router.replace(ROUTES.RIDER_HOME), 50);
      } else {
        setTimeout(() => router.replace(ROUTES.LOGIN), 50);
      }
      setLoading(false); // Hide loader after navigation logic
    }
  }, [token, role, router]);

  if (loading) {
    return (
      <FullScreenLoader visible={true} message="Loading, please wait..." />
    );
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
