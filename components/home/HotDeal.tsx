import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HotDealBanner = () => {
  return (
    <View style={styles.container}>
      {/* Text Section */}
      <View style={styles.textContainer}>
        <Text style={styles.hotDealText}>HOT DEAL</Text>
        <Text style={styles.subText}>2 Pizzas for the Price of 1!</Text>
      </View>

      {/* Order Now Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Order Now</Text>
      </TouchableOpacity>

      {/* Pizza Image */}
      <Image
        source={{
          uri: 'https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=', // Replace with local or remote image path
        }}
        style={styles.pizzaImage}
        // resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF8C32',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    overflow: 'hidden',
  },
  textContainer: {
    marginBottom: 20,
  },
  hotDealText: {
    color: '#FFD700', // Bright yellow
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
  },
  pizzaImage: {
    width: 120,
    height: 120,
    borderRadius: 1000, // Ensures a perfect circle
    position: 'absolute',
    bottom: -30, // Slightly out of the container
    right: -30, // Slightly out of the container
    borderWidth: 0.011,
    // borderColor: '#FFF', // Adds a clean white outline
  },
});

export default HotDealBanner;
