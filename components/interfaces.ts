import { ViewStyle } from 'react-native';

export interface InputFieldProps {
  name: string;
  icon?: React.ReactNode;
  placeholder?: string;
  type?: 'text' | 'number' | 'email' | 'date';
  value?: string;
  onChange?: (fieldName: string, value: string) => void;
  label?: string;
  disabled?: boolean;
  maxLength?: number;
  startDate?: string;
  minLength?: number;
  error?: string;
  style?: ViewStyle;
  lightColor?: string;
  darkColor?: string;
}

export interface FormData {
  [key: string]: string;
}

export interface HandleInputChange {
  (fieldName: string, value: string): void;
}
