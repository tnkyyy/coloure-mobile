import { Picker } from '@react-native-picker/picker';
import { styles } from '../styles/styles';
import { Dimensions } from 'react-native';
import { View } from 'react-native';
import { useState } from 'react';
const windowWidth = Dimensions.get('window').width;

export default AlgorithmPicker = (props) => {
  return (
    <View
      style={{ backgroundColor: '#cccccc', width: windowWidth, height: 100 }}
    >
      <Picker
        selectedValue={props.selectedAlgo}
        onValueChange={(itemValue, itemIndex) => props.setAlgorithm(itemValue)}
      >
        <Picker.Item label="Random" value="random" />
        <Picker.Item label="Moderate Random" value="mod-random" />
        <Picker.Item label="Shades" value="shades" />
      </Picker>
    </View>
  );
};
