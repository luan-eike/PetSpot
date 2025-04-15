import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderColor: '#ff8d6b',
    borderWidth: 3,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginHorizontal: 12,
    flex: 1,
  },
  image: {
    width: '100%',
    height: 140,
  },
  details: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  breed: {
    fontSize: 14,
    color: '#555',
  },
  age: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },

  header: {
  fontSize: 22,
  fontWeight: 'bold',
  marginBottom: 20,
  paddingHorizontal: 10,
  color: '#333',
},

})

export default styles;
