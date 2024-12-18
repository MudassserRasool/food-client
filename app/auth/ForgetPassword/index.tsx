import { Button } from '@/components/Button';
import InputField from '@/components/InputField';
import { FormData, HandleInputChange } from '@/components/interfaces';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ToastNotification from '@/components/ToastNotification/ToastNotification';
import ROUTES from '@/constants/routes';
import { useResendOtpMutation } from '@/redux/features/auth/authApi';
import globalStyle from '@/style/globalStyle';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import styles from '../Auth.style';

const ForgetPassword = () => {
  const { verificationType, data } = useLocalSearchParams();
  const router = useRouter();
  const [resendOtp, { isLoading: resendOtpLoading }] = useResendOtpMutation();
  const [formData, setFormData] = useState<FormData>({ email: data });
  // TYPE
  const [type, setType] = useState('email');
  // toggle between phone nd email
  const [isPhone, setIsPhone] = useState(false);

  const handleInputChange: HandleInputChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleToggle = () => {
    setType(isPhone ? 'email' : 'phone');
    setIsPhone(!isPhone);
  };

  const handleNext = async () => {
    try {
      const response = await resendOtp(formData?.[type]);
      if (response.data?.status === 'success') {
        ToastNotification.success(response?.data?.message, 'Otp sent');
        router.push({
          pathname: ROUTES.OTP_VERIFICATION,
        });

        router.setParams({
          verificationMethod: 'email',
          data: formData[type],
          verificationType,
        });
      } else {
        console.log(response);
        throw new Error(response?.error?.data?.message);
      }
    } catch (error) {
      ToastNotification.error(error.message, 'Otp resend failed');
    }
  };

  // console.log('--------------------------');
  // console.log(formData);
  // console.log(formData[type]);
  // console.log(type);
  // console.log('--------------------------');

  return (
    <ParallaxScrollView>
      <ThemedView style={globalStyle.authCenteredContent}>
        <ThemedText type="title" style={{ textAlign: 'center', marginTop: 30 }}>
          Reset Password
        </ThemedText>

        <ThemedView style={[styles.formContainer, { marginTop: 50 }]}>
          <ThemedView>
            {isPhone ? (
              <InputField
                onChange={handleInputChange}
                label="Phone"
                name="phone"
                value={formData.phone}
                placeholder="Enter phone number"
                type="number"
              />
            ) : (
              <InputField
                onChange={handleInputChange}
                label="Email"
                name="email"
                value={formData.email}
                placeholder="Enter email"
                type="email"
              />
            )}

            {/* <ThemedText
              onPress={handleToggle}
              type="link"
              style={{ textAlign: 'right' }}
            >
              Try another method
            </ThemedText> */}
          </ThemedView>

          <Button isLoading={resendOtpLoading} onPress={handleNext}>
            Next
          </Button>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
};

export default ForgetPassword;
