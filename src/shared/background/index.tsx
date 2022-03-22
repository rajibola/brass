import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {styles, textVariant} from './styles';

export const Background: FC<{
  text: string;
  variant: keyof typeof textVariant;
}> = ({text, variant}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, textVariant[variant]]}>{text}</Text>
    </View>
  );
};
