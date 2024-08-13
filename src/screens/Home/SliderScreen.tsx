import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Animated, Easing } from 'react-native';
import Logo from '../../assets/logo.png';
import slide1 from '../../assets/slide1.png';
import slide2 from '../../assets/slide2.png';
import slide3 from '../../assets/slide3.png';
import slide4 from '../../assets/slide4.png';
import slide5 from '../../assets/slide5.png';

type SliderItem = {
  id: string;
  image: any;
  description: string;
};

const SLIDER_DATA: SliderItem[] = [
  {
    id: '1',
    image: slide1,
    description: 'Welcome to Docsync. ',
  },
  {
    id: '2',
    image: slide2,
    description: 'Track your Dosage',
  },
  {
    id: '3',
    image: slide3,
    description: 'Book Appointments Easily',
  },
  {
    id: '4',
    image: slide4,
    description: 'Get Home Test Kits',
  },
  {
    id: '5',
    image: slide5,
    description: 'And More...',
  },
];

const { width: screenWidth } = Dimensions.get('window');

const Carousel: React.FC<{ data: SliderItem[] }> = ({ data }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<Animated.FlatList<SliderItem> | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= data.length) {
        nextIndex = 0;
      }
      setCurrentIndex(nextIndex);
      if (flatListRef.current) {
        flatListRef.current.scrollToOffset({ offset: nextIndex * screenWidth, animated: true });
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View>
      <Animated.FlatList
        ref={flatListRef}
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onMomentumScrollEnd={(event) => {
          const index = Math.floor(event.nativeEvent.contentOffset.x / screenWidth);
          setCurrentIndex(index);
        }}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.backgroundImage} />
            <View style={styles.overlay}>
              <Image source={Logo} style={styles.logo} />
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
      />
      <View style={styles.pagination}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const SliderScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Carousel data={SLIDER_DATA} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Fallback color if the image doesn't load
  },
  slide: {
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Ensures the image covers the entire slide
  },
  overlay: {
    position: 'absolute',
    top: '2%',
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    width: 230,
    height: 200,
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
