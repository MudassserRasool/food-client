import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';
import { IconSymbol } from '../ui/IconSymbol';

const ProductCard = ({ imageUrl, title, price }) => {
  const colorScheme = useColorScheme();
  return (
    <ThemedView style={styles.card} type="card">
      {/* Pizza Image */}
      <Image source={{ uri: imageUrl }} style={styles.image} />

      {/* Title */}
      <ThemedText style={styles.title}>{title}</ThemedText>

      {/* Price and Icon */}
      <ThemedView style={[styles.footer]} type="card">
        <ThemedText style={styles.price}>${price}</ThemedText>
        <TouchableOpacity>
          <IconSymbol
            size={15}
            name="shopping.basket"
            style={{
              color: '#ffff',
              backgroundColor: 'black',
              borderRadius: 50,
              padding: 5,
            }}
          />
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    width: 170,
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
    resizeMode: 'cover',
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
  icon: {},
});

export default ProductCard;
