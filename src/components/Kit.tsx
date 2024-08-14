import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Drug from './Drug';

const Kit: React.FC = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="What do you want to test for?"
        placeholderTextColor="#888"
      />
      <Drug category="Respiratory Infection" />
      <Drug category="Urinary Tract Infections" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    backgroundColor: '#fff',
  },
  searchInput: {
    height: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 40,
    marginTop: 40,
    fontFamily: 'SpaceGrotesk-Regular',
  },
});

export default Kit;
