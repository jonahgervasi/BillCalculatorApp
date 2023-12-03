import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import Modal from 'react-native-modal';
import data from '../../../data.json';

import {DiscountModalProps, Discounts} from '../../Types/types';
import {styles} from './styles';

const DiscountModal: React.FC<DiscountModalProps> = ({
  isVisible,
  toggleModal,
  onDiscountsSelected,
}) => {
  const [selectedItems, setSelectedItems] = useState<Discounts[]>([]);

  const toggleItem = (selectedDiscount: Discounts) => {
    const isSelected = selectedItems.includes(selectedDiscount);
    if (isSelected) {
      setSelectedItems(selectedItems.filter(item => item !== selectedDiscount));
    } else {
      setSelectedItems([...selectedItems, selectedDiscount]);
    }
  };

  const handleModalClose = () => {
    onDiscountsSelected(selectedItems);
    toggleModal();
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={handleModalClose}
      onSwipeComplete={handleModalClose}
      swipeDirection="down"
      style={styles.modalContainerTop}
      animationIn="slideInDown"
      animationOut="slideOutUp">
      <View style={styles.modalContent}>
        <Text style={styles.modalHeader}>Discount Options</Text>
        {data.Discounts.map((discount, index) => (
          <Pressable
            key={index}
            style={({pressed}) => [
              styles.discountItem,
              {backgroundColor: pressed ? '#e0e0e0' : 'white'},
            ]}
            onPress={() => toggleItem(discount)}>
            <Text>{discount.name}</Text>
            {selectedItems.includes(discount) && (
              <Text style={styles.checkmark}>{'\u2713'}</Text>
            )}
          </Pressable>
        ))}
        <Pressable
          style={styles.modalCloseButton}
          onPress={() => {
            toggleModal();
            handleModalClose();
          }}>
          <Text style={styles.modalCloseButtonText}>Close</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default DiscountModal;
