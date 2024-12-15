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

const Signup = () => {
  const [formData, setFormData] = useState<FormData>({});

  const handleInputChange: HandleInputChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };
  const router = useRouter();
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

          <Button>Sign Up</Button>
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
