import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';

const OfferCard = ({
  imageUrl,
  discount,
  title,
  description,
  price,
  onAddToCart,
}) => {
  return (
    <ThemedView style={styles.card}>
      {/* Image Section */}
      <ThemedView>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        {discount && <Text style={styles.discountBadge}>{discount}</Text>}
      </ThemedView>

      {/* Content Section */}
      <ThemedView style={styles.content}>
        <ThemedText style={styles.title}>{title}</ThemedText>
        <ThemedText style={styles.description}>{description}</ThemedText>

        {/* Price and Button */}
        <ThemedView style={styles.footer}>
          <ThemedText style={styles.price}>${price}</ThemedText>
          <TouchableOpacity style={styles.button} onPress={onAddToCart}>
            <ThemedText style={styles.buttonText}>Add to Cart</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    // margin: 10,
  },
  image: {
    width: '100%',
    height: 150,
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#FF8500',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    fontWeight: 'bold',
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default OfferCard;
