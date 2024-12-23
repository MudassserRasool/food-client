import { Colors } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Link } from 'expo-router'; // Replace with your routing library if different
import React from 'react';
import { StyleSheet, Text, type TextProps } from 'react-native';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | 'default'
    | 'title'
    | 'defaultSemiBold'
    | 'subtitle'
    | 'link'
    | 'gray'
    | 'primary'; // New prop for text type
  href?: string; // New prop for links
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  href,
  onPress,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  // Shared styles for both Text and Link
  const combinedStyles = [
    { color },
    type === 'default' ? styles.default : undefined,
    type === 'title' ? styles.title : undefined,
    type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
    type === 'subtitle' ? styles.subtitle : undefined,
    type === 'link' ? styles.link : undefined,
    type === 'gray' ? styles.gray : undefined,
    type === 'primary' ? styles.primary : undefined,
    { fontFamily: 'Poppins' },
    style,
  ];
  if (onPress) {
    return (
      <Text style={combinedStyles} onPress={onPress} {...rest}>
        {rest.children}
      </Text>
    );
  }
  if (href) {
    return (
      <Link href={href} style={combinedStyles} {...rest}>
        {rest.children}
      </Link>
    );
  }

  return (
    <Text style={combinedStyles} {...rest}>
      {rest.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 14,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  gray: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '500',
    color: Colors.light.grayColor,
  },
  link: {
    lineHeight: 30,
    fontSize: 14,
    color: Colors.light.link,
    textDecorationLine: 'underline',
  },
  primary: {
    color: Colors.light.primaryText,
    fontSize: 32,
    fontWeight: '600',
  },
});
