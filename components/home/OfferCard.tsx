import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from '../Button';
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
    <ThemedView style={styles.card} type="card">
      {/* Image Section */}
      <ThemedView>
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          contentFit="cover"
        />
        {discount && (
          <ThemedText style={styles.discountBadge}>{discount}</ThemedText>
        )}
      </ThemedView>

      {/* Content Section */}
      <ThemedView style={styles.content} type="card">
        <ThemedText style={styles.title}>{title}</ThemedText>
        <ThemedText style={styles.description}>{description}</ThemedText>

        {/* Price and Button */}
        <ThemedView style={styles.footer} type="card">
          <ThemedText style={styles.price}>${price}</ThemedText>
          <Button
            style={{
              width: '50%',
              marginLeft: 90,
            }}
            onPress={onAddToCart}
          >
            Add to Cart
          </Button>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  image: {
    width: '100%',
    height: 150,
  },
  discountBadge: {
    position: 'absolute',
    backgroundColor: '#FF8500',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomRightRadius: 5,
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
  },
  button: {
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
