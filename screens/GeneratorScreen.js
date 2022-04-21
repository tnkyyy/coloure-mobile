import { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from '../styles/styles';
import CardDisplayer from '../components/CardDisplayer';
import {
  moderateRandomColors,
  randomColors,
  shadeColors
} from '../utilities/colorAlgorithms';
import CardUpdater from '../components/CardUpdater';
import { ntc } from '../utilities/ntc/ntc';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AlgorithmPicker from '../components/AlgorithmPicker';

export default GeneratorScreen = () => {
  const [colors, setColors] = useState([
    {
      color: '#ffffff',
      id: 0,
      colorName: 'Use the shuffle button at the bottom to get more colors.'
    },
    {
      color: '#ffffff',
      id: 1,
      colorName: 'Use the + and - buttons to add and remove cards.'
    },
    {
      color: '#ffffff',
      id: 2,
      colorName:
        'Use the dropdowns at the top to change the generation algorithm.'
    }
  ]);

  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log(e);
    }
  };

  const saveColors = async () => {
    let oldSchemes = await AsyncStorage.getItem('schemes');
    const colorsObject = {
      items: colors,
      customName: 'TODO User scheme name',
      id: Math.floor(Math.random * 10000)
    };
    let colorsJSON;
    if (oldSchemes == undefined) {
      colorsJSON = JSON.stringify([colorsObject]);
    } else {
      oldSchemes = JSON.parse(oldSchemes);
      colorsJSON = JSON.stringify([...oldSchemes, colorsObject]);
    }
    await storeData('schemes', colorsJSON);
  };

  const [currentAlgorithm, setCurrentAlgorithm] = useState('random');

  const generateColorsHandler = () => {
    switch (currentAlgorithm) {
      case 'random':
        return randomColors;
      case 'mod-random':
        return moderateRandomColors;
      case 'shades':
        return shadeColors;
    }
  };

  const setAlgorithm = (newAlgo) => {
    setCurrentAlgorithm(newAlgo);
  };

  const updateColors = () => {
    const algo = generateColorsHandler();
    const newColors = algo(colors.length);
    replaceColors(newColors);
  };

  const replaceColors = (newColors) => {
    const newColorArr = [];
    for (let i = 0; i < newColors.length; i++) {
      newColorArr.push({
        color: newColors[i],
        id: Math.floor(Math.random() * 10000),
        colorName: ntc.name(newColors[i])[1]
      });
    }
    setColors(newColorArr);
  };

  const addCard = () => {
    const algo = generateColorsHandler();
    const newColor = algo(1);
    setColors([
      ...colors,
      {
        color: newColor[0],
        id: Math.floor(Math.random() * 10000),
        colorName: ntc.name(newColor[0])[1]
      }
    ]);
  };

  const removeCardWithID = (id) => {
    const newColors = colors.filter((value) => {
      return value.id !== id;
    });
    setColors(newColors);
  };

  return (
    <View style={[styles.screen, styles.generatorScreen]}>
      <AlgorithmPicker
        setAlgorithm={setAlgorithm}
        selectedAlgo={currentAlgorithm}
      />
      <ScrollView>
        <CardDisplayer colors={colors} onRemove={removeCardWithID} />
        <CardUpdater
          onUpdate={updateColors}
          onAdd={addCard}
          onSave={saveColors}
        />
      </ScrollView>
    </View>
  );
};
