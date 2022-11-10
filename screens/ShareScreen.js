import { View, Text, Image } from 'react-native';
import { styles } from '../styles/styles';
import * as Linking from 'expo-linking';
import Anchor from '../components/Anchor';
import { useRef } from 'react';

export default ShareScreen = () => {
  ref = useRef();

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
          alignItems: 'center',
          justifyContent: 'center'
        })
      }
    >
      <Anchor href={'https://dyst.dev'}>Share!!!</Anchor>
    </View>
  );
};
