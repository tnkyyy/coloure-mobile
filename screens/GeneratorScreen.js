import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { styles } from '../styles/styles';
import Card from '../components/Card';

export default GeneratorScreen = () => {
  const [colors, setColors] = useState([
    { color: '#f0f', id: '1', colorName: 'yellow' },
    { color: '#f0f0f0', id: '2', colorName: 'idk white or something?' }
  ]);

  const generateColorsHandler = () => {};

  const renderCard = ({ item }) => {
    <Card color={item.color} name={item.colorName} />;
  };

  return (
    <View style={[styles.screen, styles.generatorScreen]}>
      {/* <FlatList
        data={colors}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
      /> */}
      <Card color={colors[0].color} colorName={colors[0].colorName} />
      <Card color={colors[0].color} colorName={colors[0].colorName} />
    </View>
  );
};
