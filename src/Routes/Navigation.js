import {StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from '../Screens/SplashScreen';
import Login from '../Screens/User/Login';
import SignUp from '../Screens/User/SignUp';
import Dashboard from '../Screens/Dashboard';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 1500);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {showSplashScreen ? (
          <Stack.Screen
            name="splash_screen"
            component={SplashScreen}
            options={{
              title: 'Welcome',
              headerShown: false,
            }}
          />
        ) : null}
        <Stack.Screen
          name="Login_screen"
          component={Login}
          options={{
            title: 'Welcome',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp_screen"
          component={SignUp}
          options={{
            title: 'Welcome',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Dashboard_screen"
          component={Dashboard}
          options={{
            title: 'Welcome',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
