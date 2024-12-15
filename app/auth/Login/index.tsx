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

const Login = () => {
  const [formData, setFormData] = useState<FormData>({});

  const handleInputChange: HandleInputChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };
  const router = useRouter();
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
            <ThemedText
              href={ROUTES.FORGET_PASSWORD}
              type="link"
              style={{ textAlign: 'right' }}
            >
              Forgot Password?
            </ThemedText>
          </ThemedView>

          <Button>Login</Button>
        </ThemedView>
        <ThemedText type="gray" style={{ textAlign: 'center' }}>
          Don’t have an account?{' '}
          <ThemedText
            onPress={() => router.push(ROUTES.SIGNUP)}
            type="defaultSemiBold"
          >
            Sign Up
          </ThemedText>
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
};

export default Login;
