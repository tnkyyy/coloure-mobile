import { View, Text, Image } from 'react-native';
import { styles } from '../styles/styles';
import * as Linking from 'expo-linking';
import Anchor from '../components/Anchor';

export default GeneratorScreen = () => {
  return (
    <View style={[styles.screen, styles.generatorScreen]}>
      <Image
        source={require('../assets/logo-alt.png')}
        style={{ width: 300, height: 100 }}
      />
      <Text style={[styles.cardTextSub, { margin: 10, textAlign: 'center' }]}>
        Hi there! I'm Rowan, the creator of Coloure. I hope you have been able
        to enjoy using the app for whatever you need it for!
      </Text>
      <Text style={[styles.cardTextSub, { margin: 10, textAlign: 'center' }]}>
        This app is still relatively new and will be maintained, adding more
        generation algorithms and features in the future.
      </Text>
      <Anchor href={'https://dyst.dev'}>See my other projects here!</Anchor>
    </View>
  );
};
