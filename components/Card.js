import { View, Text } from 'react-native';
import { styles } from '../styles/styles';
import { pickTextColor } from '../utilities/colorAlgorithms';

export default Card = (props) => {
  const textColorBasedOnBackground = pickTextColor(props.color);

  return (
    <View style={[styles.cardContainer, { backgroundColor: props.color }]}>
      <View style={styles.cardTextContainer}>
        <Text
          style={[styles.cardTextHeader, { color: textColorBasedOnBackground }]}
        >
          {props.color}
        </Text>
        <Text
          style={[styles.cardTextSub, { color: textColorBasedOnBackground }]}
        >
          {props.colorName || 'Waiting for color name...'}
        </Text>
      </View>
    </View>
  );
};