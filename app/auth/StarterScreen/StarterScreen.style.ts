import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    gap: 10,
    margin: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 10,
  },
  image: {
    width: '100%',
    height: '60%',
    contentFit: 'contain',
    borderRadius: 15,
  },
});

export default styles;
