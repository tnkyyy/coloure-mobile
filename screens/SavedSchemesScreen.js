import { useEffect, useState } from 'react';
import { View, ScrollView, Text, Modal } from 'react-native';
import { styles } from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SchemesDisplayer } from '../components/SchemesDisplayer';
import ActionButton from '../components/ActionButton';
import EmptySchemesPlaceholder from '../components/EmptySchemesPlaceholder';
import ConfirmModal from '../components/ConfirmModal';
import Toast from 'react-native-toast-message';

export default GeneratorScreen = ({ navigation }) => {
  const [schemes, setSchemes] = useState(null);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

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

  const removeSchemeWithIDFromStorage = async (id) => {
    let schemesObject = JSON.parse(schemes);

    let newSchemes = schemesObject.filter((item) => item.id !== id);

    if (newSchemes[0] == undefined) {
      setSchemes(null);
      await AsyncStorage.removeItem('schemes');
    } else {
      setSchemes(JSON.stringify(newSchemes));
      await AsyncStorage.setItem('schemes', JSON.stringify(newSchemes));
    }
  };

  const showDeleteModal = () => {
    if (schemes == null) {
      Toast.show({
        type: 'error',
        text1: 'No saved schemes to delete!'
      });
    } else {
      setDeleteModalVisible(true);
    }
  };

  return (
    <View style={[styles.screen, styles.generatorScreen]}>
      <ConfirmModal
        actionName={'delete all saved schemes'}
        actionCallback={clearStorage}
        modalVisible={deleteModalVisible}
        setModalVisible={setDeleteModalVisible}
      />
      <ScrollView>
        {schemes == null ? (
          <EmptySchemesPlaceholder />
        ) : (
          <SchemesDisplayer
            schemes={schemes}
            removeSchemeID={removeSchemeWithIDFromStorage}
          />
        )}
        <View style={[styles.cardContainer, styles.actionContainer]}>
          <ActionButton
            iconName={'trash-bin-outline'}
            actionCallback={showDeleteModal}
          />
        </View>
      </ScrollView>
    </View>
  );
};
