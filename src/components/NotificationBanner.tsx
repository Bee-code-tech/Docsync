import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import alert from '../assets/icons/alert.png'
import close from '../assets/icons/close.png'

type NotificationBannerProps = {
  name: string;
  date: string;
  time: string;
};

const NotificationBanner: React.FC<NotificationBannerProps> = ({ name, date, time }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          resizeMode="contain"
          source={{ uri: alert }}
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
      </View>
      <Image
        resizeMode="contain"
        source={{ uri: close}}
        style={styles.closeIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    borderRadius: 5,
    borderColor: 'rgba(255, 149, 0, 0.40)',
    backgroundColor: 'linear-gradient(92deg, rgba(235, 0, 0, 0.10) 5.72%, rgba(235, 42, 0, 0.07) 97.28%)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    fontFamily: 'SpaceGrotesk-Regular, sans-serif',
    color: 'rgba(0, 0, 0, 1)',
    justifyContent: 'center',
    padding: 20,
  },
  content: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 32,
    justifyContent: 'flex-start',
  },
  icon: {
    alignSelf: 'flex-start',
    position: 'relative',
    display: 'flex',
    marginTop: 7,
    width: 17,
    flexShrink: 0,
    aspectRatio: 1,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 10,
    fontWeight: '600',
  },
  description: {
    fontSize: 8,
    fontWeight: '400',
  },
  closeIcon: {
    position: 'relative',
    display: 'flex',
    width: 20,
    flexShrink: 0,
    aspectRatio: 1,
  },
});

export default NotificationBanner;