import React from 'react';
import { Image, View } from 'react-native';
// import { Text } from '@ui-kitten/components';

import commonStyles from '../../common/commonStyles';
import styles from './styles';

const Greeting = () => {
  return (
    <View style={commonStyles.flexCenter}>
      <Image
        source={require('../../assets/texting.gif')}
        style={styles.textingGif}
      />
    </View>
  );
};

export default Greeting;
