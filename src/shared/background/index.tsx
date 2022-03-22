import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {BackgroundProps as Props} from 'types/types';
import {styles, textVariant} from './styles';

export const Background: FC<Props> = ({text, variant}) => {
  return (
    <View style={styles.container}>
      <Text style={textVariant[variant]}>{text}</Text>
    </View>
  );
};
