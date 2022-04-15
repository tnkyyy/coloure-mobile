import React, { useState } from 'react';
import { View, FlatList, Text, ScrollView } from 'react-native';
import { styles } from '../styles/styles';
import CardDisplayer from '../components/CardDisplayer';

export default GeneratorScreen = () => {
  const [colors, setColors] = useState([
    { color: '#f0f', id: '1', colorName: 'yellow' },
    { color: '#435636', id: '2', colorName: 'idk white or something?' },
    { color: '#875913', id: '3', colorName: 'broen lol' },
    { color: '#132615', id: '4', colorName: 'idk white or something?' },
    { color: '#f00022', id: '5', colorName: 'idk white or something?' },
    { color: '#991223', id: '6', colorName: 'idk white or something?' },
    { color: '#8600ff', id: '7', colorName: 'idk white or something?' }
  ]);

  const generateColorsHandler = () => {};

  return (
    <View style={[styles.screen, styles.generatorScreen]}>
      <ScrollView>
        <CardDisplayer colors={colors} />
      </ScrollView>
    </View>
  );
};
