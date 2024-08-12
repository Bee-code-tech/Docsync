import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, StatusBar } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Logo from '../../assets/logo.png'; 

const SLIDER_DATA = [
  {
    id: '1',
    image: require('../../assets/slide1.png'), 
    description: 'Welcome to the App',
  },
  {
    id: '2',
    image: require('../../assets/slide2.png'), 
    description: 'Track your Dosage',
  },
  {
    id: '3',
    image: require('../../assets/slide3.png'), 
    description: 'Book Appointments Easily',
  },
  {
    id: '4',
    image: require('../../assets/slide4.png'),
    description: 'Get Home Test Kits',
  },
  {
    id: '5',
    image: require('../../assets/slide5.png'), 
    description: 'And More...',
  },
];

const { width: screenWidth } = Dimensions.get('window');

const SliderScreen: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({ item }: { item: typeof SLIDER_DATA[0] }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.backgroundImage} />
        <View style={styles.overlay}>
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <Carousel
        data={SLIDER_DATA}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <View style={styles.pagination}>
        {SLIDER_DATA.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeSlide === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Fallback color if the image doesn't load
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject, // Makes the image cover the whole slide
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: '10%',
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  pagination: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#FFFFFF',
  },
  inactiveDot: {
    backgroundColor: '#888',
  },
});

export default SliderScreen;
