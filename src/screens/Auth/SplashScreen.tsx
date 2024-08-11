import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, Animated } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { AuthStackParamList } from '../../navigation/AuthStack';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const fadeAnim = new Animated.Value(1);

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        navigation.navigate('Login'); // Navigate to the Login screen after the splash
      });
    }, 2000);
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Animated.View style={{ ...styles.logoContainer, opacity: fadeAnim }}>
        <Text style={styles.logo}>
          App Logo
          </Text> 
          {/* Ensure this text is wrapped in a <Text> component */}
      </Animated.View>
    </View>
     
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4D4AD3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 32,
    color: '#FFFFFF',
  },
});

export default SplashScreen;