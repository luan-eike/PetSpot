import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  animatedCard: {
    width: '90%',
    height: '85%',
  },
  card: {
    flex: 1,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 4,
    backgroundColor: '#000', // fundo provisório caso a imagem falhe
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },/*
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },*/
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 150,
    zIndex: 1,
    opacity: 1,    
  },
  details: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    zIndex: 2,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  breed: {
    fontSize: 16,
    color: '#fff',
    marginTop: 4,
  },
  loader: {
    position: 'absolute',
    top: '45%',
    alignSelf: 'center',
    zIndex: 2,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
    backgroundColor: '#f2f2f2', // Fundo claro para evitar fundo preto
  },
  
});

export default styles;
