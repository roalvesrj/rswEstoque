import React from "react";
import {Text} from 'react-native';
import './style';

const Submit = () => {
  return (
    <>
      <Container style={styles.Container}>
        <Button style={styles.Button}>
          <Text style={{fontSize: 20, color: 'white'}}>Submit</Text>
        </Button>
      </Container>
    </>
  );
};

export default Submit;
