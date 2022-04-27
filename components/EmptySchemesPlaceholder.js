import { Text, View } from 'react-native';
import { styles } from '../styles/styles';

export default EmptySchemesPlaceholder = (props) => {
  return (
    <View
      style={[
        styles.schemeContainer,
        {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#e7e7e7',
          borderRadius: 25,
          padding: 10
        }
      ]}
    >
      <Text style={styles.cardTextSub}>
        Save some schemes from the generator to get started! They will be saved
        here for future reference.
      </Text>
    </View>
  );
};
