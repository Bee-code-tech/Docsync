

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import CurrentLocation from './CurrentLocation';
import notification from '../assets/icons/notification.png';
import cart from '../assets/icons/cart.png';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <CurrentLocation location="Oluyole, 46373" />
      <View style={styles.iconContainer}>
        <Image
          resizeMode="contain"
          source={notification}
          style={styles.icon}
        />
        <Image
          resizeMode="contain"
          source={cart}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10, 
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 15
  },
  icon: {
    width: 30, 
    height: 30, 
    marginLeft: 20, 
  },
});

export default Header;
