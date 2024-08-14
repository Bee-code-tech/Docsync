import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import CurrentLocation from './CurrentLocation';
import notification from '../assets/icons/notification.png'
import cart from '../assets/icons/cart.png'


const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <CurrentLocation location="Oluyole, 46373" />
      <View style={styles.iconContainer}>
        <Image
          resizeMode="contain"
          source={{ uri: notification }}
          style={styles.icon}
        />
        <Image
          resizeMode="contain"
          source={{ uri: cart}}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'space-between',
  },
  iconContainer: {
    alignSelf: 'stretch',
    display: 'flex',
    alignItems: 'center',
    gap: 35,
    justifyContent: 'flex-end',
    margin: 'auto',
  },
  icon: {
    alignSelf: 'stretch',
    position: 'relative',
    display: 'flex',
    width: 24,
    height: 24,
    flexShrink: 0,
    margin: 'auto',
    aspectRatio: 1,
  },
});

export default Header;