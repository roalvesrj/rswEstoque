import React, {useState} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';
import {ActionSheet, Root} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

//import styles from './Style';

const ImagePick = () => {
  const [resource, setResource] = useState('');

  const handleRemoveImage = () => {};
  const handleSelectImage = () => {
    const buttons = ['Camera', 'Photo Library', 'Cancel'];
    ActionSheet.show(
      {
        options: buttons,
        cancelButtonIndex: 2,
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            break;
          case 1:
            choosePhotosFromGallery();
            break;
          default:
            break;
        }
      },
    );
  };

  const choosePhotosFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 200,
      multiple: true,
    })
      .then((images) => {
        if (images.length > 0) {
          navigateToViewPhotos(images);
        }
      })
      .catch((err) => {
        console.log(' Error fetching images from gallery ', err);
      });
  };
  return (
    <Root>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleRemoveImage}>
          <Text style={styles.buttonText}>Deletar</Text>
        </TouchableOpacity>
        <Image style={{width: 200, height: 200}} />
        <TouchableOpacity onPress={handleSelectImage}>
          <Text style={{width: 200, height: 200}}>Selecinar</Text>
        </TouchableOpacity>
      </View>
    </Root>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 30,
    paddingHorizontal: 10,
    alignContent: 'center',
    backgroundColor: '#fafafa',
  },

  image: {
    flex: 1,
    width: 185,
    height: 185,
    marginBottom: 5,
  },

  button: {
    width: 180,
    height: 60,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});

export default ImagePick;
