import React from 'react';
import { Text } from '@ui-kitten/components';

import styles from './styles';

interface Props {
  title: string;
}

const TitleText: React.FC<Props> = ({ title }) => {
  return <Text style={[styles.title]}>{title}</Text>;
};

export default TitleText;
