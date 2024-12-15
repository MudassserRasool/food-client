import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '90%',
  },
  pinCodeContainer: {
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  pinCodeText: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    marginTop: -20,
    textAlign: 'center',
    margin: 20,
  },
  inBut: {
    width: '70%',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 11,
    borderRadius: 50,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  text_header: {
    color: '#420475',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default styles;
