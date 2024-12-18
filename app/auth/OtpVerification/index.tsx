import { Button } from '@/components/Button';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ToastNotification from '@/components/ToastNotification/ToastNotification';
import ROUTES from '@/constants/routes';
import {
  useResendOtpMutation,
  useVerifyOtpMutation,
  useVerifyResendOtpMutation,
} from '@/redux/features/auth/authApi';
import { setCredentials } from '@/redux/features/auth/authSlice';
import globalStyle from '@/style/globalStyle';
import { useLocalSearchParams, useRouter } from 'expo-router/build/hooks';
import React from 'react';
import { OtpInput } from 'react-native-otp-entry';
import { useDispatch } from 'react-redux';
import styles from './OtpVerification.style';

const OtpVerification = () => {
  const { verificationMethod, data, verificationType } = useLocalSearchParams();
  const [verifyOtp, { isLoading: verificationLoading }] =
    useVerifyOtpMutation();
  const [resendOtp, { isLoading: resendOtpLoading }] = useResendOtpMutation();
  const [verifyResendOtp, { isLoading: verifyResendOtpLoading }] =
    useVerifyResendOtpMutation();

  const router = useRouter();
  const dispatch = useDispatch();

  const handelResendOtp = async () => {
    try {
      const response = await resendOtp(data);
      if (response.data?.status === 'success') {
        ToastNotification.success(response?.data?.message, 'Otp sent');
      } else {
        console.log(response);
        throw new Error(response?.error?.data?.message);
      }
    } catch (error) {
      ToastNotification.error(error.message, 'Otp resend failed');
    }
  };

  const handelVerifyOtp = async (otp) => {
    const payload = {
      otp,
      email: data,
    };
    try {
      const response =
        verificationType === 'signupVerification'
          ? await verifyOtp(payload)
          : await verifyResendOtp(payload);
      if (response.data?.status === 'success') {
        ToastNotification.success(response?.data?.message, 'Otp verified');
        if (verificationType === 'signupVerification') {
          dispatch(setCredentials(response.data.data));
        } else {
          router.push(ROUTES.RESET_PASSWORD);
          router.setParams({
            verificationMethod,
            data,
            otp,
          });
        }
      } else {
        throw new Error(response?.error?.data?.message);
      }
    } catch (error) {
      ToastNotification.error(error.message, 'Otp verification failed');
    }
  };
  return (
    <ParallaxScrollView>
      <ThemedView style={globalStyle.authCenteredContent}>
        <ThemedText
          type="title"
          style={{
            textAlign: 'center',
            marginTop: 30,
            textTransform: 'uppercase',
          }}
        >
          CHECK YOUR {verificationMethod} FOR OTP
        </ThemedText>
        <ThemedText
          type="gray"
          style={{
            textAlign: 'center',
            marginTop: 20,
          }}
        >
          We have sent a 4-digit code at{' '}
          <ThemedText type="defaultSemiBold">{data}</ThemedText>
        </ThemedText>

        <ThemedView>
          <OtpInput
            numberOfDigits={4}
            focusColor="green"
            autoFocus={false}
            hideStick={true}
            placeholder="******"
            blurOnFilled={true}
            disabled={false}
            type="numeric"
            secureTextEntry={false}
            focusStickBlinkingDuration={500}
            onFocus={() => console.log('Focused')}
            onBlur={() => console.log('Blurred')}
            onTextChange={(text) => console.log(text)}
            onFilled={(text) => handelVerifyOtp(text)}
            textInputProps={{
              accessibilityLabel: 'One-Time Password',
            }}
            theme={{
              containerStyle: styles.container,
              pinCodeContainerStyle: styles.pinCodeContainer,
              pinCodeTextStyle: styles.pinCodeText,
              // focusStickStyle: styles.focusStick,
              focusedPinCodeContainerStyle: styles.pinCodeContainer,
            }}
          />
        </ThemedView>

        <ThemedText type="gray" style={{ textAlign: 'center' }}>
          Didn’t receive the code?{' '}
          <ThemedText onPress={handelResendOtp} type="defaultSemiBold">
            Resend
          </ThemedText>
        </ThemedText>

        <Button
          onPress={() => {
            router.push(ROUTES.RESET_PASSWORD);
            router.setParams({
              verificationMethod,
              data,
            });
          }}
        >
          Next
        </Button>
      </ThemedView>
    </ParallaxScrollView>
  );
};

export default OtpVerification;
