import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../styles/styles';
import { pickTextColor } from '../utilities/colorAlgorithms';
import ActionButton from './ActionButton';

export default SchemeCard = (props) => {
  const numColors = props.scheme.items.length;
  const averageWidth = (100 / numColors).toString();

  const removeThisScheme = () => {
    console.log(props.scheme);
  };

  return (
    <View>
      <View
        style={[
          styles.schemeContainer,
          {
            backgroundColor: '#ffffff',
            flexDirection: 'row',
            overflow: 'hidden'
          }
        ]}
      >
        {props.scheme.items.map((item, n) => (
          <View
            style={{
              backgroundColor: item.color,
              height: '100%',
              width: averageWidth + '%',
              justifyContent: 'flex-end',
              alignItems: 'center'
            }}
            key={n}
          >
            <Text
              style={{
                fontFamily: 'Inter_500Medium',
                fontSize: 16,
                marginBottom: 0
              }}
            >
              {item.colorName}
            </Text>
            <Text
              style={{
                fontFamily: 'Inter_500Medium',
                fontSize: 16,
                marginBottom: 5
              }}
            >
              {item.color}
            </Text>
          </View>
        ))}
      </View>
      <ActionButton
        icon={'bin'}
        actionCallback={() => {
          props.removeSchemeID(props.scheme.id);
        }}
      />
    </View>
  );
};
