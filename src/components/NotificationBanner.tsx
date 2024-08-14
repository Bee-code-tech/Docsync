import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import alert from '../assets/icons/alert.png';
import close from '../assets/icons/close.png';

type NotificationBannerProps = {
  name: string;
  date: string;
  time: string;
};

const NotificationBanner: React.FC<NotificationBannerProps> = ({ name, date, time }) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={alert}
        style={styles.icon}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {name}, Your Next Antibiotic Dose is Scheduled for {date}, {time}
        </Text>
        <Text style={styles.description}>
          Consistent and timely antibiotic use is crucial in fighting infections and promoting overall health.
        </Text>
      </View>
      <Image
        resizeMode="contain"
        source={close}
        style={styles.closeIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start', 
    padding: 15,
    backgroundColor: 'rgba(235, 0, 0, 0.1)', 
    borderRadius: 5,
    borderColor: 'rgba(255, 149, 0, 0.4)',
    borderWidth: 1,
    marginBottom: 20,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10, 
  },
  textContainer: {
    flex: 1, 
    flexDirection: 'column',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
    color: '#000',
    fontFamily: 'SpaceGrotesk-Bold',
  },
  description: {
    fontSize: 12,
    color: '#000',
    fontFamily: 'SpaceGrotesk-Regular',
  },
  closeIcon: {
    width: 20, 
    height: 20,
    marginLeft: 10,
  },
});

export default NotificationBanner;

