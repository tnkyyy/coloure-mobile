import { View, Text } from 'react-native';
import { styles } from '../styles/styles';
import ActionButton from './ActionButton';

export default CardUpdater = (props) => {
  return (
    <View
      style={[
        styles.cardContainer,
        styles.actionContainer,
        { backgroundColor: '#ffffff' }
      ]}
    >
      <ActionButton iconName={'shuffle'} actionCallback={props.onUpdate} />
    </View>
  );
};
