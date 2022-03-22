import React from 'react';
import {FC} from 'react';
import {Text, TextStyle, View} from 'react-native';

const Background: FC<{text: string; textStyle?: TextStyle}> = ({
  text,
  textStyle,
}) => {
  return (
    <View
      style={{
        flex: 1,
        position: 'absolute',
        right: '-80%',
        top: '20%',
        width: '170%',
        height: '100%',
        justifyContent: 'center',
      }}>
      <Text
        style={[
          {
            fontSize: 190,
            fontWeight: '900',
            transform: [{rotate: '90deg'}],
            opacity: 0.09,
          },
          textStyle,
        ]}>
        {text}
      </Text>
    </View>
  );
};
