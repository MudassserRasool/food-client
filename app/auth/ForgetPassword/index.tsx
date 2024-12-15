import { Button } from '@/components/Button';
import InputField from '@/components/InputField';
import { FormData, HandleInputChange } from '@/components/interfaces';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ROUTES from '@/constants/routes';
import globalStyle from '@/style/globalStyle';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import styles from '../Auth.style';

const ForgetPassword = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({});
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

  const handleNext = () => {
    router.push({
      pathname: ROUTES.OTP_VERIFICATION,
    });

    router.setParams({
      type,
      data: formData[type],
    });
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

            <ThemedText
              onPress={handleToggle}
              type="link"
              style={{ textAlign: 'right' }}
            >
              Try another method
            </ThemedText>
          </ThemedView>

          <Button onPress={handleNext}>Next</Button>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
};

export default ForgetPassword;
