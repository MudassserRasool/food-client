import { Button } from '@/components/Button';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ROUTES from '@/constants/routes';
import globalStyle from '@/style/globalStyle';
import { useLocalSearchParams, useRouter } from 'expo-router/build/hooks';
import React from 'react';
import { OtpInput } from 'react-native-otp-entry';
import styles from './OtpVerification.style';

const OtpVerification = () => {
  const { type, data } = useLocalSearchParams();
  const router = useRouter();

  const handelResendOtp = async () => {};
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
          CHECK YOUR {type} FOR OTP
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
            numberOfDigits={6}
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
            onFilled={(text) => console.log(`OTP is ${text}`)}
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
            console.log(ROUTES.RESET_PASSWORD);
            router.setParams({
              type,
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
