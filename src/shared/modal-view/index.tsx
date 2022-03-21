import React, {FC} from 'react';
import {Modal, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

export const ModalView: FC<{
  children?: any;
  visible: boolean;
  onClickExit?: () => void;
  full?: boolean;
}> = ({full, children, visible, onClickExit}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.container}>
        {full ? (
          children
        ) : (
          <View style={styles.innerView}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={onClickExit}
            />
            {children}
          </View>
        )}
      </View>
    </Modal>
  );
};
