// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from '../screens/Home/HomeScreen';
// import HomeTestKitScreen from '../screens/HomeTestKitScreen';
// import DosageTrackerScreen from '../screens/DosageTracker/DosageTrackerScreen';
// import AppointmentsScreen from '../screens/Appointments/AppointmentsScreen';
// import MoreOptionsScreen from '../screens/MoreOptionsScreen';
// import Ionicons from 'react-native-vector-icons/Ionicons';



// const Tab = createBottomTabNavigator();


// const MainTabs: React.FC = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = focused ? 'home' : 'home-outline';
//           } else if (route.name === 'HomeTestKit') {
//             iconName = focused ? 'medkit' : 'medkit-outline';
//           } else if (route.name === 'DosageTracker') {
//             iconName = focused ? 'clipboard' : 'clipboard-outline';
//           } else if (route.name === 'Appointments') {
//             iconName = focused ? 'calendar' : 'calendar-outline';
//           } else if (route.name === 'More') {
//             iconName = focused ? 'ellipsis-horizontal' : 'ellipsis-horizontal-outline';
//           }

//            return <Ionicons name={iconName || 'default-icon'} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: '#800080',
//         tabBarInactiveTintColor: 'gray',
//         tabBarShowLabel: true,
//       })}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="HomeTestKit" component={HomeTestKitScreen} />
//       <Tab.Screen name="DosageTracker" component={DosageTrackerScreen} />
//       <Tab.Screen name="Appointments" component={AppointmentsScreen} />
//       <Tab.Screen name="More" component={MoreOptionsScreen} />
//     </Tab.Navigator>
//   );
// };

// export default MainTabs;



import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import HomeTestKitScreen from '../screens/HomeTestKitScreen';
import DosageTrackerScreen from '../screens/DosageTracker/DosageTrackerScreen';
import AppointmentsScreen from '../screens/Appointments/AppointmentsScreen';
import MoreOptionsScreen from '../screens/MoreOptionsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'HomeTestKit') {
            iconName = focused ? 'medkit' : 'medkit-outline';
          } else if (route.name === 'DosageTracker') {
            iconName = focused ? 'clipboard' : 'clipboard-outline';
          } else if (route.name === 'Appointments') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'More') {
            iconName = focused ? 'ellipsis-horizontal' : 'ellipsis-horizontal-outline';
          }

          return <Ionicons name={iconName || 'default-icon'} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#800080',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: true,
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

export default MainTabs;
