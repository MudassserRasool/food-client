import { Button } from '@/components/Button';
import InputField from '@/components/InputField';
import { FormData, HandleInputChange } from '@/components/interfaces';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ToastNotification from '@/components/ToastNotification/ToastNotification';
import ROUTES from '@/constants/routes';
import { useSignupMutation } from '@/redux/features/auth/authApi';
import globalStyle from '@/style/globalStyle';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import styles from '../Auth.style';

const Signup = () => {
  const [signup, { isLoading }] = useSignupMutation();
  const [formData, setFormData] = useState<FormData>({});

  const handleInputChange: HandleInputChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };
  const router = useRouter();

  const handleSignUp = async () => {
    // if both password and re-enter password are not the same
    if (formData.password !== formData.reEnterPassword) {
      ToastNotification.error('Passwords do not match', 'Signup failed');
      return;
    }
    try {
      // console.log(formData);
      const response = await signup(formData);
      // console.log(response);
      if (response.data?.status === 'success') {
        ToastNotification.success(
          response?.data?.message,
          'Register successful'
        );
        // router.push(ROUTES.OTP_VERIFICATION,{

        // });
        router.push(ROUTES.OTP_VERIFICATION);
        router.setParams({
          verificationType: 'signupVerification',
          data: formData.email,
        });
      } else if (response?.error) {
        if (response?.error?.data?.statusCode === 403) {
          ToastNotification.error(
            response?.error?.data?.message,
            'Login failed'
          );
          setTimeout(() => {
            router.push(ROUTES.FORGET_PASSWORD);
            router.setParams({
              verificationMethod: 'email',
              data: formData.email,
              verificationType: 'signupVerification',
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
      console.log(error, 'signup errrr');
      ToastNotification.error(error.message, 'Login failed');
    }
  };
  return (
    <ParallaxScrollView>
      <ThemedView style={globalStyle.authCenteredContent}>
        <ThemedText type="title" style={{ textAlign: 'center' }}>
          SIGN UP
        </ThemedText>

        <ThemedView style={styles.formContainer}>
          <InputField
            onChange={handleInputChange}
            label="Username/Email"
            name="email"
            value={formData.email}
            placeholder="Enter username"
          />
          <InputField
            onChange={handleInputChange}
            label="Phone Number"
            name="phone"
            value={formData.phone}
            type="number"
            placeholder="Enter phone number"
          />
          <InputField
            onChange={handleInputChange}
            label="Password"
            name="password"
            value={formData.password}
            type="password"
            placeholder="Enter password"
          />
          <InputField
            onChange={handleInputChange}
            label="Re-enter Password"
            name="reEnterPassword"
            value={formData.reEnterPassword}
            type="password"
            placeholder="Re-enter password"
          />

          <Button isLoading={isLoading} onPress={handleSignUp}>
            Sign Up
          </Button>
        </ThemedView>
        <ThemedText type="gray" style={{ textAlign: 'center' }}>
          Already have an account?{' '}
          <ThemedText
            onPress={() => router.push(ROUTES.LOGIN)}
            type="defaultSemiBold"
          >
            Login
          </ThemedText>
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
};

export default Signup;
