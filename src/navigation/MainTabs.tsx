

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import { Image, View, StyleSheet } from 'react-native';
import HomeTestKitScreen from '../screens/HomeTestKitScreen';
import DosageTrackerScreen from '../screens/DosageTracker/DosageTrackerScreen';
import AppointmentsScreen from '../screens/Appointments/AppointmentsScreen';
import MoreOptionsScreen from '../screens/MoreOptionsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeIcon from '../assets/icons/home.png';
import HomeTestKitIcon from '../assets/icons/kit.png';
import DosageTrackerIcon from '../assets/icons/dosage.png';
import AppointmentsIcon from '../assets/icons/appointment.png';
import MoreIcon from '../assets/icons/more.png';

export type MainTabsParamList = {
  Home: undefined;
  HomeTestKit: undefined;
  DosageTracker: undefined;
  Appointments: undefined;
  More: undefined;
  YourOrders: undefined;   // Add other screens here
  Settings: undefined;     // Add other screens here
  Help: undefined;         // Add other screens here
};

const Tab = createBottomTabNavigator<MainTabsParamList>();

const MainTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconSource;

          if (route.name === 'Home') {
            iconSource = HomeIcon;
          } else if (route.name === 'HomeTestKit') {
            iconSource = HomeTestKitIcon;
          } else if (route.name === 'DosageTracker') {
            iconSource = DosageTrackerIcon;
          } else if (route.name === 'Appointments') {
            iconSource = AppointmentsIcon;
          } else if (route.name === 'More') {
            iconSource = MoreIcon;
          }

          return (
            <View style={styles.iconContainer}>
              <Image
                source={iconSource}
                style={[
                  styles.icon,
                  { tintColor: focused ? '#800080' : 'gray' },
                ]}
              />
            </View>
          );
        },
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#800080',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="HomeTestKit" component={HomeTestKitScreen} />
      <Tab.Screen name="DosageTracker" component={DosageTrackerScreen} />
      <Tab.Screen name="Appointments" component={AppointmentsScreen} />
      <Tab.Screen name="More" component={MoreOptionsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  activeLine: {
    position: 'absolute',
    bottom: -5,
    width: '100%',
    height: 3,
    backgroundColor: '#800080',
  },
});

export default MainTabs;
