import { Button } from '@/components/Button';
import InputField from '@/components/InputField';
import { FormData, HandleInputChange } from '@/components/interfaces';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ToastNotification from '@/components/ToastNotification/ToastNotification';
import ROLES from '@/constants/roles';
import ROUTES from '@/constants/routes';
import { useLoginMutation } from '@/redux/features/auth/authApi';
import { setCredentials } from '@/redux/features/auth/authSlice';
import globalStyle from '@/style/globalStyle';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../Auth.style';

const Login = () => {
  const [formData, setFormData] = useState<FormData>({});
  const { loginType } = useLocalSearchParams();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const handleInputChange: HandleInputChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };
  const router = useRouter();

  const handleLogin = async () => {
    try {
      console.log(formData);
      const response = await login(formData);
      console.log(response);
      if (response.data?.status === 'success') {
        ToastNotification.success(response?.data?.message, 'Login successful');
        console.log(response.data.data);
        dispatch(setCredentials(response.data.data));
      } else if (response?.error) {
        if (response?.error?.data?.statusCode === 403) {
          ToastNotification.error(
            response?.error?.data?.message,
            'Login failed'
          );
          setTimeout(() => {
            router.push(ROUTES.FORGET_PASSWORD);
            router.setParams({
              verificationType: 'signupVerification',
              data: formData.email,
            });
          }, 1000);
        } else {
          ToastNotification.error(
            response?.error?.data?.message,
            'Login failed'
          );
        }
      }
    } catch (error) {
      ToastNotification.error(error.message, 'Login failed');
    }
  };
  return (
    <ParallaxScrollView>
      <ThemedView style={globalStyle.authCenteredContent}>
        <ThemedText type="title" style={{ textAlign: 'center', marginTop: 30 }}>
          LOGIN
        </ThemedText>

        <ThemedView style={[styles.formContainer, { marginTop: 50 }]}>
          <InputField
            onChange={handleInputChange}
            label="Username/Email"
            name="email"
            value={formData.email}
            placeholder="Enter username"
          />
          <ThemedView>
            <InputField
              onChange={handleInputChange}
              label="Password"
              name="password"
              value={formData.password}
              type="password"
              placeholder="Enter password"
            />
            {loginType !== ROLES.RIDER && (
              <ThemedText
                href={ROUTES.FORGET_PASSWORD}
                type="link"
                style={{ textAlign: 'right' }}
              >
                Forgot Password?
              </ThemedText>
            )}
          </ThemedView>

          <Button isLoading={isLoading} onPress={handleLogin}>
            Login
          </Button>
        </ThemedView>
        {loginType !== ROLES.RIDER && (
          <ThemedText type="gray" style={{ textAlign: 'center' }}>
            Don’t have an account?{' '}
            <ThemedText
              onPress={() => router.push(ROUTES.SIGNUP)}
              type="defaultSemiBold"
            >
              Sign Up
            </ThemedText>
          </ThemedText>
        )}
      </ThemedView>
    </ParallaxScrollView>
  );
};

export default Login;
