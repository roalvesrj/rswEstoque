import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import styles from './Style';

const ImagePick = () => {
  const [resource, setResource] = useState({});

  const handleRemoveImage = () => {};
  const handleSelectImage = () => {
    ImagePicker.showImagePicker(options, (res) => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        this.setState({
          resourcePath: source,
        });
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleRemoveImage}>
        <Text style={styles.buttonText}>Deletar</Text>
      </TouchableOpacity>
      <Image
        source={{uri: this.state.resourcePath.uri}}
        style={{width: 200, height: 200}}
      />
      <TouchableOpacity onPress={handleSelectImage} style={styles.button}>
        <Text style={styles.buttonText}>Selecinar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImagePick;
