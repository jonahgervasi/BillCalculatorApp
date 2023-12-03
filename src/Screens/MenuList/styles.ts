import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
  },
  column: {
    flex: 1,
    padding: 2,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10, // Reduced marginBottom
    borderColor: '#ddd',
    borderBottomWidth: 1,
    padding: 10, // Reduced padding
    borderRadius: 8, // Slightly smaller border radius
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
  },
  menuItemName: {
    fontSize: 16, // Reduced font size
    color: '#333',
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  sectionHeader: {
    fontSize: 18, // Slightly smaller font size for section header
    fontWeight: 'bold',
    backgroundColor: '#eee',
    padding: 10,
    marginBottom: 10,
  },
  selectedItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#e0e0e0',
  },
});
