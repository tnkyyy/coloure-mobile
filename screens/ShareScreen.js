import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../styles/styles';
import * as Linking from 'expo-linking';
import Anchor from '../components/Anchor';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import CardDisplayer from '../components/CardDisplayer';
import ViewShot from 'react-native-view-shot';
import * as Sharing from 'expo-sharing';

export default ShareScreen = () => {
  ref = useRef();
  const colors = useSelector((state) => state.colors.colorsArray);
  const shareData = () => {
    ref.current.capture().then((uri) => {
      Sharing.shareAsync(uri).catch((err) => {
        Toast.show({
          type: 'error',
          text1: 'Sharing failed. Do you have any colors?'
        });
      });
    });
  };

  return (
    <View
      style={
        ([styles.screen, styles.generatorScreen],
        {
          flex: 1,
          flexDirection: 'column',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          paddingTop: 100
        })
      }
    >
      <View>
        <ViewShot
          ref={ref}
          options={{ fileName: 'coloure-scheme', format: 'png', quality: 0.9 }}
        >
          <CardDisplayer
            colors={colors}
            onRemove={() => {
              return;
            }}
            isAlternate={true}
          />
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#f2f2f2'
            }}
          >
            <Text style={(styles.cardTextSub, styles.subSubtle)}>
              Made with &lt;3 with Coloure
            </Text>
          </View>
        </ViewShot>
      </View>

      <TouchableOpacity
        onPress={() => {
          shareData();
        }}
        style={[
          {
            alignSelf: 'center',
            marginTop: 'auto'
          },
          styles.shareButton
        ]}
      >
        <Text style={styles.cardTextMid}>Share!</Text>
      </TouchableOpacity>
    </View>
  );
};
