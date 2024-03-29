import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {ModalView} from 'shared';
import {styles} from './styles';

export const Loader: FC<LoaderProps> = ({isLoading}) => {
  return (
    <ModalView visible={!!isLoading} full>
      <View style={styles.container}>
        <Text style={styles.text}>
          {typeof isLoading === 'string' ? isLoading : 'Loading...'}
        </Text>
      </View>
    </ModalView>
  );
};
