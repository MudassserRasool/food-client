import { IconSymbol } from '@/components/ui/IconSymbol';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity } from 'react-native';

const AuthLayout = () => {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerTitle: '',
        headerLeft: () => (
          <TouchableOpacity onPress={() => router.back()}>
            <IconSymbol name="chevron.left" size={24} color="black" />
          </TouchableOpacity>
        ),
      }}
    />
  );
};

export default AuthLayout;
