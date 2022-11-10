import { View, Text, Image } from 'react-native';
import { styles } from '../styles/styles';
import * as Linking from 'expo-linking';
import Anchor from '../components/Anchor';

export default AboutScreen = () => {
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
