import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {styles, textVariant} from './styles';

export const Background: FC<BackgroundProps> = ({text, variant}) => {
  return (
    <View style={styles.container}>
      <Text style={textVariant[variant]}>{text}</Text>
    </View>
  );
};
