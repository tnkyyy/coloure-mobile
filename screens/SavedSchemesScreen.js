import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default GeneratorScreen = ({ navigation }) => {
  [schemes, setSchemes] = useState('');

  const loadSavedData = async () => {
    const schemes = await AsyncStorage.getItem('schemes');
    const schemesString = JSON.stringify(schemes);
    setSchemes(schemesString);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadSavedData().catch(console.error);
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={[styles.screen, styles.generatorScreen]}>
      <Text>{schemes == null ? 'Loading...' : schemes}</Text>
    </View>
  );
};
