import React from 'react';
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ResturentScreen } from './src/features/resturent/screens/resturents.screens';
import { MapScreen } from './src/features/resturent/screens/map.screens';
import { SettingsScreen } from './src/features/resturent/screens/settings.screens';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/insfrastructure/theme';

import { useFonts as useOswald, Lato_400Regular } from '@expo-google-fonts/lato';
import { useFonts as useLato, Oswald_400Regular } from '@expo-google-fonts/oswald';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';



export default function App() {

  const [latoLoaded] = useOswald({
    Lato_400Regular,
  });
  const [oswaldLoaded] = useLato({
    Oswald_400Regular,
  });

  if (!latoLoaded || !oswaldLoaded) {
    return null;
  }


  const Tab = createBottomTabNavigator();
  const TAB_ICON = {
    Resturents: 'md-restaurant',
    Map: 'md-map',
    Settings: 'md-settings',
  }

  const screenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
      tabBarIcon: ({ color, size }) => {
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    };
  }

  return (
    <>
      <ThemeProvider theme={theme} options={{ headerShown: false }}>
        <NavigationContainer >
          <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Resturents" component={ResturentScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
