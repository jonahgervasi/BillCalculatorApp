import React, {useState, useEffect} from 'react';
import {View, Text, SectionList, Pressable} from 'react-native';

import SelectedItemList from '../SelectedItemList/SelectedItemList';
import Bill from '../Bill/Bill';
import {MenuItem, MenuListProps} from '../../Types/types';
import {styles} from './styles';

const MenuList: React.FC<MenuListProps> = ({selectedDiscounts, data}) => {
  const [selectedItems, setSelectedItems] = useState<MenuItem[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    setMenuItems(data.MenuItems);
  }, [data.MenuItems]);

  const handleItemClick = (item: MenuItem) => {
    const uniqueId = `${item.id}_${Date.now()}`;
    const newItem = {...item, uniqueId};

    setSelectedItems([...selectedItems, newItem]);
  };

  const renderMenuItem = ({item}: {item: MenuItem}) => (
    <Pressable style={styles.menuItem} onPress={() => handleItemClick(item)}>
      <Text style={styles.menuItemName}>{item.name}</Text>
      <Text style={styles.menuItemPrice}>${item.price}</Text>
    </Pressable>
  );

  const renderSectionHeader = ({
    section: {title},
  }: {
    section: {title: string};
  }) => <Text style={styles.sectionHeader}>{title}</Text>;

  const renderSelectedItems = () => (
    <View style={styles.column}>
      <SelectedItemList items={selectedItems} setItems={setSelectedItems} />
    </View>
  );

  return (
    <>
      <View style={styles.container}>
        <View style={styles.column}>
          <SectionList
            sections={groupByCategory(menuItems)}
            keyExtractor={item => item.id.toString()}
            renderItem={renderMenuItem}
            renderSectionHeader={renderSectionHeader}
          />
        </View>

        <View style={styles.column}>{renderSelectedItems()}</View>
      </View>
      <View>
        <Bill
          selectedItems={selectedItems}
          taxes={data.Taxes}
          selectedDiscounts={selectedDiscounts}
        />
      </View>
    </>
  );
};

const groupByCategory = (data: MenuItem[]) => {
  const groupedData: {title: string; data: MenuItem[]}[] = [];

  data.forEach(item => {
    const existingCategory = groupedData.find(
      group => group.title === item.category,
    );

    if (existingCategory) {
      existingCategory.data.push(item);
    } else {
      groupedData.push({title: item.category, data: [item]});
    }
  });

  return groupedData;
};

export default MenuList;
