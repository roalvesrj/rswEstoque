import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  destaque: {
    paddingBottom: 20,
    color: '#333',
    fontSize: 26,
    fontFamily: 'Euclid Extra Bold',
  },
  containerCapas: {
    flexDirection: 'row',
    marginBottom: 50,
  },
  capa: {
    width: 185,
    height: 185,
    marginBottom: 5,
  },
  boxCapa: {
    marginRight: 15,
  },
  destaqueCapas: {
    marginBottom: 5,
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Euclid Extra Bold',
  },
  textoCapas: {
    color: '#666',
  },
});

export default styles;
