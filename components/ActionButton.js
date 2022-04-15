import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styles';

export default ActionButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.actionCallback}
      style={styles.actionButton}
    >
      <View>
        <Ionicons name={props.iconName} size={42} />
      </View>
    </TouchableOpacity>
  );
};
