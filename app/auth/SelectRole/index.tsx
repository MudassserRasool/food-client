import Images from '@/assets';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ROLES from '@/constants/roles';
import ROUTES from '@/constants/routes';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const SelectRole = () => {
  const router = useRouter();
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <Image
        source={colorScheme === 'light' ? Images.BlackLogo : Images.WhiteLogo}
        style={styles.logo}
      />

      <ThemedView style={styles.headingContainer}>
        <ThemedView style={styles.line} />
        <ThemedText style={styles.headingText}>LOGIN AS</ThemedText>
        <ThemedText style={styles.line} />
      </ThemedView>

      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[styles.card, { backgroundColor: '#F5F5F5' }]}
          onPress={() => router.push(ROUTES.LOGIN)}
        >
          <Image source={Images.Customer} style={styles.icon} />
          <Text style={styles.cardText}>Customer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { backgroundColor: '#F5F5F5' }]}
          onPress={() => {
            router.push(ROUTES.LOGIN);
            router.setParams({
              loginType: ROLES.RIDER,
            });
          }}
        >
          <Image source={Images.Rider} style={styles.icon} />
          <Text style={styles.cardText}>Rider</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#D3D3D3',
    marginHorizontal: 10,
  },
  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  card: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3, // Shadow for Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3, // Shadow for iOS
    paddingVertical: 20,
    paddingHorizontal: 30,
    width: '45%',
  },
  icon: {
    width: 70,
    height: 70,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  cardText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
  },
});

export default SelectRole;
