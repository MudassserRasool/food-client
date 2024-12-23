import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';

const CategoryOption = ({ imageUrl, label }) => {
  const themeColor = useColorScheme();
  return (
    <ThemedView style={styles.card} type="card">
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <ThemedText type="gray">{label}</ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 19,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
    // backgroundColor: '#595853',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
  },
});

export default CategoryOption;
