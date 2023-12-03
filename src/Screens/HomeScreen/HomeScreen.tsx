import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity, Button} from 'react-native';
import data from '../../../data.json';
import MenuList from '../MenuList/MenuList';
import DiscountModal from '../DiscountModal/DiscountModal';
import {Discounts} from '../../Types/types';
import {styles} from './styles';

const Stack = createStackNavigator();

const HomeScreen: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedDiscounts, setSelectedDiscounts] = useState<Discounts[]>([]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleDiscountsSelected = (discounts: Discounts[]) => {
    setSelectedDiscounts(discounts);
  };

  const renderHeaderRightButton = () => {
    return (
      <TouchableOpacity style={styles.headerButton}>
        <Button onPress={toggleModal} title="Discounts"></Button>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Menu"
          options={({}) => ({
            headerRight: renderHeaderRightButton,
          })}>
          {props => (
            <MenuList
              {...props}
              selectedDiscounts={selectedDiscounts}
              data={data}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
      <DiscountModal
        isVisible={isModalVisible}
        toggleModal={toggleModal}
        onDiscountsSelected={handleDiscountsSelected}
      />
    </>
  );
};

export default HomeScreen;
