import { Image, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import React from 'react';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedText>-----------------home---------------</ThemedText>
      <ThemedText>-----------------home---------------</ThemedText>

      <ThemedText>-----------------home---------------</ThemedText>

      <ThemedText>-----------------home---------------</ThemedText>

      <ThemedText>-----------------home---------------</ThemedText>

      <ThemedText>-----------------home---------------</ThemedText>

      <ThemedText>-----------------home---------------</ThemedText>

      <ThemedText>-----------------home---------------</ThemedText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
