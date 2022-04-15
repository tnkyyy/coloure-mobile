import { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from '../styles/styles';
import CardDisplayer from '../components/CardDisplayer';
import { randomColors } from '../utilities/colorAlgorithms';
import CardUpdater from '../components/CardUpdater';
import { ntc } from '../utilities/ntc/ntc';

export default GeneratorScreen = () => {
  const [colors, setColors] = useState([
    {
      color: '#ffffff',
      id: '0',
      colorName: 'Use the shuffle button at the bottom to get more colors.'
    },
    {
      color: '#ffffff',
      id: '1',
      colorName: 'Use the + and - buttons to add and remove cards.'
    },
    {
      color: '#ffffff',
      id: '2',
      colorName:
        'Use the dropdowns at the top to change the generation algorithm.'
    }
  ]);

  const [currentAlgorithm, setCurrentAlgorithm] = useState('Random');

  const generateColorsHandler = async () => {
    const n = colors.length;
    switch (currentAlgorithm) {
      case 'Random':
        await replaceColors(randomColors(n));
    }
  };

  const replaceColors = async (newColors) => {
    const newColorArr = [];
    for (let i = 0; i < newColors.length; i++) {
      newColorArr.push({
        color: newColors[i],
        id: i.toString(),
        colorName: ntc.name(newColors[i])[1]
      });
    }
    setColors(newColorArr);
  };

  return (
    <View style={[styles.screen, styles.generatorScreen]}>
      <ScrollView>
        <CardDisplayer colors={colors} />
        <CardUpdater onUpdate={generateColorsHandler} />
      </ScrollView>
    </View>
  );
};
