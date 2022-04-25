import { View, Text, Image } from 'react-native';
import { styles } from '../styles/styles';

export default GeneratorScreen = () => {
  return (
    <View style={[styles.screen, styles.generatorScreen]}>
      <Image
        source={require('../assets/logo-alt.png')}
        style={{ width: 50, height: 50 }}
      />
    </View>
  );
};
