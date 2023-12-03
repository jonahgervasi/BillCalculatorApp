import React from 'react';
import {View, Text} from 'react-native';

import {BillProps} from '../../Types/types';
import {styles} from './styles';

const Bill: React.FC<BillProps> = ({
  selectedItems,
  taxes,
  selectedDiscounts,
}) => {
  const calculateSubtotal = () => {
    return selectedItems.reduce((total, item) => total + item.price, 0);
  };

  const applyDiscounts = () => {
    return selectedDiscounts.reduce((total, discount) => {
      if (discount.amount > 1) {
        // If discount amount is greater than 1, treat it as addition
        return total + discount.amount;
      } else if (discount.amount < 1) {
        // If discount amount is less than 1, treat it as a percentage
        const discountValue = subtotal * discount.amount;
        return total + discountValue;
      }
      // If discount amount is neither greater than 1 nor less than 1, ignore it
      return total;
    }, 0);
  };

  const applyTaxes = () => {
    // Initialize total tax amount
    let totalTax = 0;

    // Find all taxes where appliesToCategory is false
    const defaultTaxes = taxes.filter(tax => !tax.appliesToCategory);

    // Sum the amounts of default taxes
    const defaultTaxAmount = defaultTaxes.reduce(
      (sum, tax) => sum + tax.amount,
      0,
    );

    // Iterate through selected items
    for (const item of selectedItems) {
      // Check if tax applies to the item's category
      const matchingTax = taxes.find(
        tax => tax.appliesToCategory && tax.appliesToCategory === item.category,
      );

      if (matchingTax) {
        // Calculate tax amount based on the item's category
        const taxAmount = matchingTax.amount;

        // Accumulate the total tax amount
        totalTax += item.price * taxAmount;
      } else {
        // If appliesToCategory is false, use the sum of default tax amounts
        totalTax += item.price * defaultTaxAmount;
      }
    }

    return totalTax;
  };

  const subtotal = calculateSubtotal();
  const total = subtotal - applyDiscounts() + applyTaxes();

  return (
    <View style={styles.billContainer}>
      <Text style={styles.billText}>Subtotal: ${subtotal.toFixed(2)}</Text>
      <Text style={styles.billText}>
        Discounts: -${applyDiscounts().toFixed(2)}
      </Text>
      <Text style={styles.billText}>Taxes: +${applyTaxes().toFixed(2)}</Text>
      <View style={styles.totalContainer}>
        <Text style={[styles.totalText, styles.centeredText]}>Total:</Text>
        <Text style={styles.totalAmount}>${total.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default Bill;
