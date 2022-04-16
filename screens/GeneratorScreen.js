import { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from '../styles/styles';
import CardDisplayer from '../components/CardDisplayer';
import { randomColors } from '../utilities/colorAlgorithms';
import CardUpdater from '../components/CardUpdater';
import { ntc } from '../utilities/ntc/ntc';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  useEffect(() => {
    const saveNumber = async () => {
      try {
        let emptyData = JSON.stringify({});
        await storeData('currentID', '0');
        await storeData('schemes', emptyData);
      } catch (e) {
        console.log(e);
      }
      console.log('Saved current ID and empty schemes');
    };

    saveNumber().catch(console.error);
  }, []);

  const saveColors = async () => {
    let oldSchemes = await AsyncStorage.getItem('schemes');
    let newID = await AsyncStorage.getItem('currentID');
    let nextIDString = (parseInt(newID) + 1).toString();
    const colorsObject = {
      [nextIDString]: {
        items: colors,
        customName: 'TODO User scheme name'
      }
    };
    let colorsJSON;
    if (oldSchemes == {}) {
      colorsJSON = JSON.stringify([colorsObject]);
    } else {
      oldSchemes = JSON.parse(oldSchemes);
      colorsJSON = JSON.stringify([...oldSchemes, colorsObject]);
    }
    console.log(colorsJSON);
    await storeData('schemes', colorsJSON);
    await storeData('currentID', nextIDString);
  };

  const [currentAlgorithm, setCurrentAlgorithm] = useState('Random');

  const generateColorsHandler = () => {
    switch (currentAlgorithm) {
      case 'Random':
        return randomColors;
    }
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
        id: i,
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
        id: colors.length,
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
