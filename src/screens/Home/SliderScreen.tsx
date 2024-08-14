import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Animated, TouchableOpacity, StatusBar } from 'react-native';
import Logo from '../../assets/logo.png';
import slide1 from '../../assets/slide1.png';
import slide2 from '../../assets/slide2.png';
import slide3 from '../../assets/slide3.png';
import slide4 from '../../assets/slide4.png';
import slide5 from '../../assets/slide5.png';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { AuthStackParamList } from '../../navigation/AuthStack';

interface SliderScreenProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

type SliderItem = {
  id: string;
  image: any;
  description: string;
  subheading?: string; // Optional subheading for the first slider
};

const SLIDER_DATA: SliderItem[] = [
  {
    id: '1',
    image: slide1,
    description: 'Welcome to Docsync',
    subheading: 'Your no.1 digital healthcare app in fighting against antimicrobial resistance',
  },
  {
    id: '2',
    image: slide2,
    description: 'Fight against antimicrobial resistance with technology',
  },
  {
    id: '3',
    image: slide3,
    description: 'Get 24/7 access to reliable healthcare professionals',
  },
  {
    id: '4',
    image: slide4,
    description: 'Walk into our exclusively digital hospital today',
  },
  {
    id: '5',
    image: slide5,
    description: 'Get affordable healthcare service now!',
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
              {item.id === '1' ? (
                <>
                  <Text style={styles.bigHeading}>{item.description}</Text>
                  <Text style={styles.subheading}>{item.subheading}</Text>
                </>
              ) : (
                <Text style={styles.heading}>{item.description}</Text>
              )}
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

const SliderScreen: React.FC<SliderScreenProps> = ({ setIsLoggedIn }) => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();

  const handleGetStartedPress = () => {
    setIsLoggedIn(true);
  };

  return (
    <View style={styles.container}>
      {/* Transparent StatusBar */}
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <Carousel data={SLIDER_DATA} />
      <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStartedPress}>
        <Text style={styles.getStartedButtonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Fallback color if the image doesn't load
    justifyContent: 'center',
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
    top: '1%',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: "flex-start",
    paddingHorizontal: 20,
  },
  logo: {
    width: 250,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
    marginHorizontal: 'auto',
  },
  bigHeading: {
    fontSize: 37,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'left',
    marginBottom: 10,
    marginTop: 70,
    fontFamily: 'SpaceGrotesk-Bold',
  },
  subheading: {
    fontSize: 28,
    color: '#FFFFFF',
    textAlign: 'left',
    marginHorizontal: 3,
    fontFamily: 'SpaceGrotesk-Regular',
  },
  heading: {
    fontSize: 37,
    color: '#FFFFFF',
    textAlign: 'left',
    fontWeight: '600',
    marginTop: 100,
    fontFamily: 'SpaceGrotesk-Bold',
  },
  pagination: {
    position: 'absolute',
    bottom: 100,
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
  getStartedButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  getStartedButtonText: {
    color: '#4D4AD3', // Purple color text
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'SpaceGrotesk-Bold',
  },
});

export default SliderScreen;
