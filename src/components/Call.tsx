import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import callIcon from '../assets/icons/call.png';

const Call: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Rotated Box for Aesthetics */}
      <View style={styles.rotatedBox} />

      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Need help with booking an appointment?</Text>
          <Text style={styles.subheading}>
            Our experts are here to help you. Recommended for elders
          </Text>
        </View>

        <TouchableOpacity style={styles.callButton}>
          <Image source={callIcon} style={styles.callIcon} />
          <Text style={styles.callButtonText}>Call Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4D4AD3',
    borderRadius: 10,
    padding: 20,
    position: 'relative',
    overflow: 'hidden',
    marginVertical: 50,
  },
  rotatedBox: {
    position: 'absolute',
    width: '150%', 
    height: '150%', 
    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
    top: '-50%', 
    left: '50%', 
    transform: [{ rotate: '-45deg' }], 
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1, // Allow text to take up available space
    marginRight: 10, // Add space between text and button
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 5,
    fontFamily: 'SpaceGrotesk-Bold',
  },
  subheading: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fff',
    fontFamily: 'SpaceGrotesk-Regular',
  },
  callButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15, // Adjusted padding to keep button within bounds
  },
  callIcon: {
    width: 15,
    height: 20,
    marginRight: 8, // Reduced margin to fit the text better
  },
  callButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
    fontFamily: 'SpaceGrotesk-Bold',
  },
});

export default Call;
