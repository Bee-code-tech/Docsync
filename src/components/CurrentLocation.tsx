import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import profile from '../assets/icons/Profile.png'
import dropDown from '../assets/icons/Frame.png'

type CurrentLocationProps = {
  location: string;
};

const CurrentLocation: React.FC<CurrentLocationProps> = ({ location }) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={{ uri: profile }}
        style={styles.locationIcon}
      />
      <View style={styles.locationInfo}>
        <Text style={styles.locationLabel}>Current Location</Text>
        <View style={styles.locationDetails}>
          <Text style={styles.locationText}>{location}</Text>
          <Image
            resizeMode="contain"
            source={{ uri: dropDown }}
            style={styles.dropdownIcon}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    fontFamily: 'SpaceGrotesk-Regular, sans-serif',
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
    justifyContent: 'flex-start',
    width: 181,
  },
  locationIcon: {
    alignSelf: 'stretch',
    position: 'relative',
    display: 'flex',
    width: 28,
    flexShrink: 0,
    margin: 'auto',
    aspectRatio: 1,
  },
  locationInfo: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    width: 133,
    margin: 'auto',
  },
  locationLabel: {
    fontSize: 13,
    fontWeight: '400',
    alignSelf: 'flex-start',
  },
  locationDetails: {
    display: 'flex',
    marginTop: 5,
    alignItems: 'flex-end',
    gap: 5,
    fontSize: 15,
    fontWeight: '600',
    justifyContent: 'flex-start',
  },
  locationText: {
    fontSize: 15,
    fontWeight: '600',
  },
  dropdownIcon: {
    position: 'relative',
    display: 'flex',
    width: 20,
    flexShrink: 0,
    aspectRatio: 1,
  },
});

export default CurrentLocation;