import { FlatList, StyleSheet } from 'react-native';

import { Button } from '@/components/Button';
import CategoryOption from '@/components/home/CategoryOption';
import HotDeal from '@/components/home/HotDeal';
import OfferCard from '@/components/home/OfferCard';
import ProductCard from '@/components/home/ProductCard';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ROUTES from '@/constants/routes';
import { logout } from '@/redux/features/auth/authSlice';
import globalStyle from '@/style/globalStyle';
import { useRouter } from 'expo-router';
import React from 'react';
import { useDispatch } from 'react-redux';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleAddToCart = () => {
    console.log('jjjj');
  };

  const ccdata = [
    {
      id: '1',
      imageUrl:
        'https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=',
      label: 'Classic',
    },
    {
      id: '2',
      imageUrl:
        'https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=',
      label: 'Veggie',
    },
    {
      id: '3',
      imageUrl:
        'https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=',
      label: 'Cheesy',
    },
  ];

  const products = [
    {
      id: '1',
      imageUrl:
        'https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=',
      title: 'Beef Pepperoni',
      price: '7.35',
    },
    {
      id: '2',
      imageUrl:
        'https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=',
      title: 'Beef Pepperoni',
      price: '7.35',
    },
    {
      id: '3',
      imageUrl:
        'https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=',
      title: 'Beef Pepperoni',
      price: '7.35',
    },
  ];

  // if (true) {
  //   return (
  //     <FullScreenLoader visible={true} message="Loading, please wait..." />
  //   );
  // }
  return (
    <ParallaxScrollView>
      <ThemedView style={globalStyle.userLayout}>
        <ThemedText type="title">Welcome Sarah!</ThemedText>
        <ThemedText type="gray">Hungry? Explore Our Pizza Menu!</ThemedText>
        <HotDeal
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          title="React Icon"
          description="This is a description for the React logo."
        />
        <ThemedText type="title">Categories</ThemedText>

        <FlatList
          data={ccdata}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CategoryOption imageUrl={item.imageUrl} label={item.label} />
          )}
          horizontal
          contentContainerStyle={styles.list}
          showsHorizontalScrollIndicator={false}
        />

        <ThemedText type="title">Featured</ThemedText>

        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductCard
              imageUrl={item.imageUrl}
              title={item.title}
              price={item.price}
            />
          )}
          horizontal
          contentContainerStyle={styles.list}
          showsHorizontalScrollIndicator={false}
        />

        {/* <ThemedText type="title">Recommended </ThemedText>

        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductCard
              imageUrl={item.imageUrl}
              title={item.title}
              price={item.price}
            />
          )}
          horizontal
          contentContainerStyle={styles.list}
          showsHorizontalScrollIndicator={false}
        /> */}

        <ThemedText style={{ marginVertical: 10 }} type="title">
          Special Offers
        </ThemedText>

        <OfferCard
          imageUrl="https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU="
          discount="50% OFF"
          title="End Of Year Feast"
          description="2 Cheese Pizza, 1 Fries, 1 Cold Drink"
          price="12.35"
          onAddToCart={handleAddToCart}
        />
      </ThemedView>

      <Button
        onPress={() => {
          dispatch(logout());
          router.replace(ROUTES.LOGIN);
        }}
      >
        Logout
      </Button>
      {/* <IconSymbol size={28} name="house.fill" color={'red'} /> */}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingVertical: 10,
    paddingHorizontal: 2,
    gap: 15,
  },
  optionContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  label: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
