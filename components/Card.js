import { View, Text, Dimensions } from 'react-native';
import { styles } from '../styles/styles';

export default Card = (props) => {
  return (
    <View style={[styles.cardContainer, { backgroundColor: props.color }]}>
      <View style={styles.cardTextContainer}>
        <Text style={styles.cardTextHeader}>{props.color}</Text>
        <Text style={styles.cardTextSub}>{props.colorName}</Text>
      </View>
    </View>
  );
};
