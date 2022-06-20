import React, { useEffect, useRef } from 'react';
import { View, Animated, ImageBackground } from 'react-native';

import styles from './styles';

import TitleText from '../../components/TitleText';

// TODO: Finish Greeting, Login and Signup pages, hurry.

const Greeting = () => {
  const slideAnim = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  return (
    <ImageBackground
      source={require('assets/BG.jpg')}
      style={[styles.background]}
      blurRadius={20}>
      <View style={[styles.container]}>
        <Animated.Image
          source={require('assets/texting.gif')}
          style={{
            ...styles.textingGif,
            transform: [{ translateY: slideAnim }],
          }}
          resizeMode={'cover'}
          borderRadius={10}
        />
        <TitleText title="Welcome to Chatly!" />
      </View>
    </ImageBackground>
  );
};

export default Greeting;
