import { useEffect, useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { styles } from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SchemesDisplayer } from '../components/SchemesDisplayer';
import ActionButton from '../components/ActionButton';

export default GeneratorScreen = ({ navigation }) => {
  const [schemes, setSchemes] = useState('');
  const [dataPresent, setDataPresent] = useState(false);

  const loadSavedData = async () => {
    const schemes = await AsyncStorage.getItem('schemes');
    if (schemes == '{}') {
      setDataPresent(false);
    } else {
      setDataPresent(true);
    }
    const schemesString = JSON.parse(schemes);
    setSchemes(schemesString);
  };

  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadSavedData().catch(console.error);
    });
    return unsubscribe;
  }, [navigation]);

  const clearStorage = async () => {
    await AsyncStorage.clear();
    try {
      let emptyData = JSON.stringify({});
      await storeData('currentID', '0');
      await storeData('schemes', emptyData);
    } catch (e) {
      console.log(e);
    }
    console.log('Reset storage via button');
    loadSavedData().catch(console.error);
  };

  return (
    <View style={[styles.screen, styles.generatorScreen]}>
      <ScrollView>
        {dataPresent ? (
          <Text>'Some are added'</Text>
        ) : (
          <Text>'None present'</Text>
        )}
        <View style={[styles.cardContainer, styles.actionContainer]}>
          <ActionButton
            iconName={'trash-bin-outline'}
            actionCallback={clearStorage}
          />
        </View>
      </ScrollView>
    </View>
  );
};
