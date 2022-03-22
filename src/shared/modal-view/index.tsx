import React, {FC} from 'react';
import {Modal, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/EvilIcons';
import {ModalViewProps as Props} from 'types/types';
Icon.loadFont();

export const ModalView: FC<Props> = ({
  full,
  children,
  visible,
  onClickExit,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.container}>
        {full ? (
          children
        ) : (
          <View style={styles.innerView}>
            <TouchableOpacity style={styles.closeButton} onPress={onClickExit}>
              <Icon name="close" size={30} color="#000" />
            </TouchableOpacity>
            {children}
          </View>
        )}
      </View>
    </Modal>
  );
};
