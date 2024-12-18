// create a custom button in react native

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Link } from 'expo-router';
import React from 'react';
import { ActivityIndicator, TouchableOpacity, ViewStyle } from 'react-native';
import { ThemedText } from './ThemedText';
interface ButtonProps {
  onPress?: () => void;
  style?: ViewStyle;
  icon?: React.ReactNode;
  children: React.ReactNode;
  href?: string;
  isLoading?: boolean;
  disabled?: boolean;
}
export const Button: React.FC<ButtonProps> = ({
  onPress,
  style,
  icon,
  children,
  href,
  isLoading = false,
  disabled = false,
}) => {
  const theme = useColorScheme() ?? 'light';

  return href ? (
    <Link
      href={href}
      style={{
        backgroundColor:
          theme === 'light' ? Colors.dark.background : Colors.light.background,
        padding: 12,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        width: '100%',
        // marginHorizontal: 'auto',
        ...style,
      }}
    >
      <ThemedText
        type="defaultSemiBold"
        style={{
          color: theme === 'light' ? Colors.dark.text : Colors.light.text,
          display: 'flex',
          gap: 5,
          textAlign: 'center',
        }}
      >
        {icon}
        {children}
      </ThemedText>
    </Link>
  ) : (
    <TouchableOpacity
      style={{
        backgroundColor:
          theme === 'light' ? Colors.dark.background : Colors.light.background,
        padding: 12,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        width: '100%',
        marginHorizontal: 'auto',
        ...style,
      }}
      disabled={isLoading}
      onPress={onPress}
    >
      <ThemedText
        type="defaultSemiBold"
        style={{
          color: theme === 'light' ? Colors.dark.text : Colors.light.text,
          display: 'flex',
          gap: 5,
        }}
      >
        {isLoading ? (
          <ActivityIndicator
            size="small"
            color={theme === 'light' ? Colors.dark.text : Colors.light.text}
          />
        ) : (
          <>
            {icon}
            {children}
          </>
        )}
      </ThemedText>
    </TouchableOpacity>
  );
};

/*
 <Button
        style={{ backgroundColor: 'red' }}
        onPress={() => console.log('pressed')}
        icon={<IconSymbol size={28} name="bag.fill" />}
      >
        Press me
      </Button>
*/
