import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {MenuItem, SelectedItemListProps} from '../../Types/types';
import {styles} from './styles';

const SelectedItemList: React.FC<SelectedItemListProps> = ({
  items,
  setItems,
}) => {
  const handleRemoveItem = (uniqueId: string) => {
    const updatedItems = items.filter(item => item.uniqueId !== uniqueId);
    setItems(updatedItems);
  };

  const renderSwipeableItem = (item: MenuItem) => {
    const rightSwipe = () => {
      return (
        <TouchableOpacity onPress={() => handleRemoveItem(item.uniqueId)}>
          <View style={styles.deleteBox}>
            <Animated.Text style={{color: 'white', padding: 10}}>
              Delete
            </Animated.Text>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <Swipeable
        renderRightActions={() => rightSwipe()}
        onSwipeableOpen={() => {
          handleRemoveItem(item.uniqueId);
        }}>
        <View style={styles.selectedItem}>
          <Text style={styles.selectedItemName}>{item.name}</Text>
          <Text style={styles.selectedItemPrice}>${item.price}</Text>
        </View>
      </Swipeable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.uniqueId.toString()}
        renderItem={({item}) => renderSwipeableItem(item)}
      />
    </View>
  );
};

export default SelectedItemList;
