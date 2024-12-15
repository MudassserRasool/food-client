import type { PropsWithChildren, ReactElement } from 'react';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { ThemedView } from '@/components/ThemedView';
import { useBottomTabOverflow } from '@/components/ui/TabBarBackground';
import { useColorScheme } from '@/hooks/useColorScheme';

type Props = PropsWithChildren<{
  headerImage?: ReactElement;
  headerHeight?: number;
  style?: ViewStyle;
  contentStyle?: ViewStyle;
  onScroll?: (event: any) => void;
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerHeight = 250, // Default height
  style,
  contentStyle,
  onScroll,
}: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const bottom = useBottomTabOverflow();

  const headerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          scrollOffset.value,
          [-headerHeight, 0, headerHeight],
          [-headerHeight / 2, 0, headerHeight * 0.75]
        ),
      },
      {
        scale: interpolate(
          scrollOffset.value,
          [-headerHeight, 0, headerHeight],
          [2, 1, 1]
        ),
      },
    ],
  }));

  return (
    <ThemedView style={[styles.container, style]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Animated.ScrollView
          ref={scrollRef}
          scrollEventThrottle={16}
          onScroll={onScroll}
          contentContainerStyle={[{ paddingBottom: bottom }, contentStyle]}
          scrollIndicatorInsets={{ bottom }}
        >
          <ThemedView style={styles.content}>{children}</ThemedView>
        </Animated.ScrollView>
      </KeyboardAvoidingView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    gap: 16,
    overflow: 'hidden',
  },
});
