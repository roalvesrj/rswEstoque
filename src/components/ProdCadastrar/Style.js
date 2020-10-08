import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Container: {
      flex: 1,
    },
  
    ContainerImage: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: 30,
      borderWidth: 0.2,
    },
  
    Image: {
      width: 100,
      height: 100,
      backgroundColor: 'blue',
      alignItems: 'center',
    },
  
    ContainerButton: {
      borderWidth: 0.1,
      elevation: 0.2,
    },
  
    Input: {
      marginLeft: 15,
      paddingVertical: 15,
      justifyContent: 'center',
    },
  });

  export default styles;