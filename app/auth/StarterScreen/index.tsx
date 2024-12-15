import React from 'react';

import Images from '@/assets';
import { Button } from '@/components/Button';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import ROUTES from '@/constants/routes';
import { Image } from 'expo-image';
import styles from './StarterScreen.style';

const StarterScreen = () => {
  console.log(Images.StarterFood);
  return (
    <ThemedView style={styles.mainContainer}>
      <Image source={Images.StarterFood} style={styles.image} />
      <ThemedView style={styles.container}>
        {/* Pizza Image */}

        {/* Heading Text */}
        <ThemedText type="default">
          We deliver fast, straight to your door—because we believe your pizza
          should never be late!
        </ThemedText>

        <Button href={ROUTES.SELECT_ROLE}>Login</Button>

        <Button href={ROUTES.SELECT_ROLE}>Sign Up</Button>
        <Button onPress={() => {}}>Skip For Now</Button>
      </ThemedView>
    </ThemedView>
  );
};

export default StarterScreen;
