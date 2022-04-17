import { useEffect, useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { styles } from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SchemesDisplayer } from '../components/SchemesDisplayer';
import ActionButton from '../components/ActionButton';

export default GeneratorScreen = ({ navigation }) => {
  const [schemes, setSchemes] = useState(null);

  const loadSavedData = async () => {
    const schemesNew = await AsyncStorage.getItem('schemes');
    console.log('Loaded schemes! Data is', schemesNew);
    if (schemesNew == null) {
      setSchemes(null);
    } else if (schemesNew != undefined) {
      setSchemes(schemesNew);
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
    loadSavedData().catch(console.error);
  };

  return (
    <View style={[styles.screen, styles.generatorScreen]}>
      <ScrollView>
        {schemes == null ? (
          <Text>Data is null</Text>
        ) : (
          <SchemesDisplayer schemes={schemes} />
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
