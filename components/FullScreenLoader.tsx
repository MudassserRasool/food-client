// File: components/FullScreenLoader.js
import React from 'react';
import { ActivityIndicator, Modal, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

const FullScreenLoader = ({
  visible,
  backgroundColor = '#fffff',
  spinnerColor = '#00000',
  message = '',
}) => {
  if (!visible) return null;

  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      statusBarTranslucent
    >
      <ThemedView style={[styles.container, { backgroundColor }]}>
        <ActivityIndicator size="large" color={spinnerColor} />
        {message ? <ThemedText>{message}</ThemedText> : null}
      </ThemedView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    marginTop: 20,
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default FullScreenLoader;
