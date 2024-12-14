// components/InputField.tsx

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
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
}) => {
  const formattedStartDate = startDate
    ? new Date(startDate).toISOString().split('T')[0]
    : undefined;
  const theme = useColorScheme() ?? 'light';
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <ThemedView style={styles.container}>
      {label && (
        <ThemedText type="subtitle" style={styles.label}>
          {label}
        </ThemedText>
      )}
      <View
        style={[
          { color },
          styles.inputWrapper,
          disabled && styles.disabled,
          //   {
          //     backgroundColor: theme === 'light' ? '' : Colors.dark.background,
          //   },
        ]}
      >
        {icon && (
          <TouchableOpacity style={styles.iconWrapper}>{icon}</TouchableOpacity>
        )}
        <TextInput
          style={[styles.input, icon ? styles.withIcon : null]}
          placeholder={placeholder}
          placeholderTextColor="#888"
          value={value}
          onChangeText={(text) => onChange(name, text)}
          keyboardType={type === 'number' ? 'numeric' : 'default'}
          maxLength={maxLength}
          editable={!disabled}
        />
      </View>
      {error && (
        <ThemedText type="subtitle" style={{ color: 'red' }}></ThemedText>
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  iconWrapper: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
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
