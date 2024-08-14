import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import profile from '../assets/icons/Profile.png';
import dropDown from '../assets/icons/Frame.png';

type CurrentLocationProps = {
  location: string;
};

const CurrentLocation: React.FC<CurrentLocationProps> = ({ location }) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={profile}
        style={styles.locationIcon}
      />
      <View style={styles.locationInfo}>
        <Text style={styles.locationLabel}>Current Location</Text>
        <View style={styles.locationDetails}>
          <Text style={styles.locationText}>{location}</Text>
          <Image
            resizeMode="contain"
            source={dropDown}
            style={styles.dropdownIcon}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // padding: 10,
    // backgroundColor: 'green',
    borderRadius: 5,
  },
  locationIcon: {
    width: 38,
    height: 38,
    marginRight: 15,
  },
  locationInfo: {
    flexDirection: 'column', 
    justifyContent: 'center',
  },
  locationLabel: {
    fontSize: 13,
    fontWeight: '400',
    color: 'black',
    fontFamily: 'SpaceGrotesk-Regular'
  },
  locationDetails: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginTop: 5,
  },
  locationText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
    marginRight: 5, 
     fontFamily: 'SpaceGrotesk-Bold'
  },
  dropdownIcon: {
    width: 25,
    height: 25,
  },
});

export default CurrentLocation;
