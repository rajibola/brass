import React, {FC} from 'react';
import {Modal, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

export const ModalView: FC<{
  children?: any;
  visible: boolean;
}> = ({children, visible}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.container}>
        <View style={styles.innerView}>
          <TouchableOpacity style={styles.closeButton} />
          {children}
        </View>
      </View>
    </Modal>
  );
};
