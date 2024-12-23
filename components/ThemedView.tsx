// import { View, type ViewProps } from 'react-native';

// import { Colors } from '@/constants/Colors';
// import { useThemeColor } from '@/hooks/useThemeColor';

// export type ThemedViewProps = ViewProps & {
//   lightColor?: string;
//   darkColor?: string;
//   isPrimary?: boolean;
//   type?: 'default' | 'primary' | 'card';
// };

// export function ThemedView({
//   style,
//   lightColor,
//   darkColor,
//   type = 'default',
//   ...otherProps
// }: ThemedViewProps) {
//   let backgroundColor;
//   const normal = useThemeColor(
//     { light: lightColor, dark: darkColor },
//     'background'
//   );
//   const card = Colors.light.cardBackground;
//   backgroundColor =
//     type === 'primary'
//       ? Colors.light.primaryBackground
//       : type === 'card'
//       ? card
//       : normal;

//   return <View style={[{ backgroundColor }, style]} {...otherProps} />;
// }

import { Colors } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';
import { View, type ViewProps } from 'react-native';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  isPrimary?: boolean;
  type?: 'default' | 'primary' | 'card';
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    {
      light: type === 'primary' ? Colors.light.primaryBackground : lightColor,
      dark:
        type === 'primary'
          ? Colors.dark.primaryBackground
          : type === 'card'
          ? Colors.dark.cardBackground
          : darkColor,
    },
    'background'
  );

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
