// components/InputField.tsx

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { InputFieldProps } from './interfaces';

const InputField: React.FC<InputFieldProps> = ({
  name,
  icon,
  placeholder,
  type = 'text',
  value = '',
  onChange = () => {},
  label,
  disabled = false,
  maxLength = 9999999999999,
  startDate,
  minLength = 0,
  error = '',
  style,
  lightColor,
  darkColor,
  marginVertical = 3,
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const formattedStartDate = startDate
    ? new Date(startDate).toISOString().split('T')[0]
    : undefined;
  const theme = useColorScheme() ?? 'light';
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <ThemedView style={{ marginVertical: marginVertical }}>
      {label && (
        <ThemedText type="default" style={styles.label}>
          {label}
        </ThemedText>
      )}
      <View
        style={[
          { color, borderColor: Colors.light.grayColor },
          styles.inputWrapper,
          disabled && styles.disabled,
        ]}
      >
        {icon && <View style={styles.iconWrapper}>{icon}</View>}
        <TextInput
          style={[styles.input, icon ? styles.withIcon : null]}
          placeholder={placeholder}
          placeholderTextColor={
            theme === 'light'
              ? Colors.light.placeholder
              : Colors.dark.placeholder
          }
          value={value}
          onChangeText={(text) => onChange(name, text)}
          keyboardType={type === 'number' ? 'numeric' : 'default'}
          secureTextEntry={type === 'password' && !isPasswordVisible}
          maxLength={maxLength}
          editable={!disabled}
        />
        {type === 'password' && (
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.iconWrapper}
          >
            <Ionicons name={isPasswordVisible ? 'eye-off' : 'eye'} size={20} />
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <ThemedText type="subtitle" style={{ color: 'red' }}>
          {error}
        </ThemedText>
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#fff',
    overflow: 'hidden',
    height: 44,
    padding: 3,
  },
  iconWrapper: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    fontSize: 14,
    width: '100%',
  },
  withIcon: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  disabled: {
    backgroundColor: '#f9f9f9',
  },
});

export default InputField;

/**
 *   const [formData, setFormData] = useState<FormData>({});

  const handleInputChange: HandleInputChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

   <InputField
        placeholder="Enter email"
        label="Email"
        name="email"
        value={formData.email}
        error="Please enter"
        onChange={handleInputChange}
      />
 */
