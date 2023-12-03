import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  billContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
  },
  billTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  billDetails: {
    marginBottom: 10,
  },

  billDivider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 5,
  },

  billText: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'right', // Align the text to the right
  },
  centeredText: {
    textAlign: 'center', // Center the text
    flex: 1, // Expand to fill the available space
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF6347',
  },
});
