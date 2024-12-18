import { Button } from '@/components/Button';
import InputField from '@/components/InputField';
import { FormData, HandleInputChange } from '@/components/interfaces';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ToastNotification from '@/components/ToastNotification/ToastNotification';
import ROUTES from '@/constants/routes';
import { useResetPasswordMutation } from '@/redux/features/auth/authApi';
import globalStyle from '@/style/globalStyle';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import styles from '../Auth.style';

const ResetPassword = () => {
  const { otp, data } = useLocalSearchParams();
  const [formData, setFormData] = useState<FormData>({});
  const [resetPassword, { isLoading: resetPasswordLoading }] =
    useResetPasswordMutation();

  const handleInputChange: HandleInputChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };
  const router = useRouter();

  const handelResetPassword = async () => {
    if (formData.password !== formData.reEnterPassword) {
      ToastNotification.error('Passwords do not match', 'Password mismatch');
      return;
    }
    const payload = {
      password: formData.password,
      email: data,
      otp,
    };
    try {
      const response = await resetPassword(payload);
      if (response.data?.status === 'success') {
        ToastNotification.success(
          response?.data?.message,
          'Password reset successful'
        );
        router.push(ROUTES.LOGIN);
      } else {
        console.log(response);
        throw new Error(response?.error?.data?.message);
      }
    } catch (error) {
      ToastNotification.error(error.message, 'Password reset failed');
    }
  };

  return (
    <ParallaxScrollView>
      <ThemedView style={globalStyle.authCenteredContent}>
        <ThemedText type="title" style={{ textAlign: 'center', marginTop: 30 }}>
          RESET PASSWORD
        </ThemedText>

        <ThemedView style={[styles.formContainer, { marginTop: 50 }]}>
          <ThemedView>
            <InputField
              onChange={handleInputChange}
              label="New Password"
              name="password"
              value={formData.password}
              type="password"
              placeholder="Enter new password"
            />
            <InputField
              onChange={handleInputChange}
              label="Re-enter Password"
              name="reEnterPassword"
              value={formData.reEnterPassword}
              type="password"
              placeholder="Re-enter password"
            />
          </ThemedView>

          <Button
            isLoading={resetPasswordLoading}
            onPress={handelResetPassword}
            style={{ marginTop: 40 }}
          >
            Save Changes
          </Button>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
};

export default ResetPassword;
