import React, {useState} from 'react';
import {Image, StyleSheet} from 'react-native';

const CustomImage = (props) => {
  const [loeaded, setLoaded] = useState(false);
  const {imageuri} = props;
  return (
    <Image
      style={styles.capa}
      source={
        loeaded
          ? require('./../../../assets/images/not-found.png')
          : {uri: imageuri}
      }
      onError={(error) => {
        setLoaded(true);
      }}
      key={imageuri}
    />
  );
};

const styles = StyleSheet.create({
  capa: {
    width: 185,
    height: 185,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#1c74d8',
    borderRadius: 5,
  },
});

export default CustomImage;
