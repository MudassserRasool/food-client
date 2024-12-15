import { Button } from '@/components/Button';
import InputField from '@/components/InputField';
import { FormData, HandleInputChange } from '@/components/interfaces';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import globalStyle from '@/style/globalStyle';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import styles from '../Auth.style';

const ResetPassword = () => {
  const [formData, setFormData] = useState<FormData>({});

  const handleInputChange: HandleInputChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };
  const router = useRouter();
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

          <Button style={{ marginTop: 40 }}>Save Changes</Button>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
};

export default ResetPassword;
