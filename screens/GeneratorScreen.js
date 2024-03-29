import { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from '../styles/styles';
import CardDisplayer from '../components/CardDisplayer';
import {
  complementaryColours,
  moderateRandomColors,
  pastelRandomColors,
  randomColors,
  shadeColors
} from '../utilities/colorAlgorithms';
import CardUpdater from '../components/CardUpdater';
import { ntc } from '../utilities/ntc/ntc';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AlgorithmPicker from '../components/AlgorithmPicker';
import { useSelector, useDispatch } from 'react-redux';
import { setColors } from './colorsSlice';

export default GeneratorScreen = ({ navigation }) => {
  const colors = useSelector((state) => state.colors.colorsArray);
  const dispatch = useDispatch();

  // Reusable function to store data with a key and value
  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log(e); // Log if we get an error
    }
  };

  const saveColors = async () => {
    let oldSchemes = await AsyncStorage.getItem('schemes'); // Get the old saved schemes out of storage
    let newId = Math.floor(Math.random() * 10000); // We need to id every saved scheme to uniquely identify it

    // Get the new scheme as an object

    const colorsObject = {
      items: colors,
      customName: `Saved scheme ${newId}`,
      id: newId
    };

    // If there are no saved schemes from before, add it as the first
    // Othewise, just append it

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
      case 'pas-random':
        return pastelRandomColors;
      case 'shades':
        return shadeColors;
      case 'complementary':
        return complementaryColours;
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
    dispatch(setColors(newColorArr));
  };

  const addCard = () => {
    const algo = generateColorsHandler();
    const newColor = algo(1);
    dispatch(
      setColors([
        ...colors,
        {
          color: newColor[0],
          id: Math.floor(Math.random() * 10000),
          colorName: ntc.name(newColor[0])[1]
        }
      ])
    );
  };

  const removeCardWithID = (id) => {
    const newColors = colors.filter((value) => {
      return value.id !== id;
    });
    dispatch(setColors(newColors));
  };

  const shareData = () => {
    navigation.navigate('Share');
  };

  return (
    <View style={[styles.screen, styles.generatorScreen]}>
      <AlgorithmPicker
        setAlgorithm={setAlgorithm}
        selectedAlgo={currentAlgorithm}
      />

      <ScrollView style={styles.generatorScrollBG}>
        <CardDisplayer
          colors={colors}
          onRemove={removeCardWithID}
          isAlternate={false}
        />
        <CardUpdater
          onUpdate={updateColors}
          onAdd={addCard}
          onSave={saveColors}
          onShare={shareData}
        />
      </ScrollView>
    </View>
  );
};
