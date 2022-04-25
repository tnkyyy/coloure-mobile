import { Picker } from '@react-native-picker/picker';
import { styles } from '../styles/styles';
import { Dimensions } from 'react-native';
import { View } from 'react-native';
import { useState } from 'react';
const windowWidth = Dimensions.get('window').width;

export default AlgorithmPicker = (props) => {
  return (
    <View
      style={{
        backgroundColor: '#e7e7e7',
        width: '75%',
        padding: 10,
        borderRadius: 50
      }}
    >
      <Picker
        selectedValue={props.selectedAlgo}
        onValueChange={(itemValue, itemIndex) => props.setAlgorithm(itemValue)}
        mode={'dropdown'}
      >
        <Picker.Item label="Random" value="random" />
        <Picker.Item label="Moderate Random" value="mod-random" />
        <Picker.Item label="Pastel Random" value="pas-random" />
        <Picker.Item label="Shades" value="shades" />
      </Picker>
    </View>
  );
};
