import InputField from '@/components/InputField';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import globalStyle from '@/style/globalStyle';
import React from 'react';

// Update Login component
const Login = () => {
  return (
    <ThemedView style={globalStyle.authCenteredContent}>
      <ThemedText>Login</ThemedText>

      <InputField placeholder="dddddddd" />
      <InputField />

      <InputField />

      <InputField />
    </ThemedView>
  );
};

// If you want to apply styles locally for centering, you can do:

export default Login;
