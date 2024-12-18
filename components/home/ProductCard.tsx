import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';

const ProductCard = ({ imageUrl, title, price }) => {
  return (
    <ThemedView style={styles.card}>
      {/* Pizza Image */}
      <Image source={{ uri: imageUrl }} style={styles.image} />

      {/* Title */}
      <ThemedText style={styles.title}>{title}</ThemedText>

      {/* Price and Icon */}
      <ThemedView style={styles.footer}>
        <ThemedText style={styles.price}>${price}</ThemedText>
        <MaterialIcons name="lock" size={24} color="#333" />
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    width: 160,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
  },
});

export default ProductCard;
