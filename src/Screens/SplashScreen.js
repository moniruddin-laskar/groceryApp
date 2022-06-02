import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import Logo from '../Assets/Icon/icon.png'

const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };


const SplashScreen = () => {
  return (
    <View style={styles.container}>
        <Image
          style={styles.SplashScreen}
          source={Logo}
        />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
      flex : 1,
      backgroundColor: generateColor(),
      alignItems:'center',
      justifyContent:'center',
  },
  SplashScreen: {
      height:200,
      width:200,
  },
});
