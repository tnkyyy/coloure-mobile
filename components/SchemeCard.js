import { View, Text } from 'react-native';
import { styles } from '../styles/styles';
import { pickTextColor } from '../utilities/colorAlgorithms';
import ActionButton from './ActionButton';

export default SchemeCard = (props) => {
  const numColors = props.scheme.items.length;
  const averageWidth = (100 / numColors).toString();

  return (
    <>
      <View
        style={{
          borderRadius: 25,
          backgroundColor: '#ffffff',
          margin: 3
        }}
      >
        <View
          style={[
            styles.schemeContainer,
            {
              flexDirection: 'row',
              overflow: 'hidden'
            }
          ]}
        >
          {props.scheme.items.map((item, n) => {
            const textColor = pickTextColor(item.color);
            return (
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
                    marginBottom: 0,
                    color: textColor
                  }}
                >
                  {item.colorName}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Inter_500Medium',
                    fontSize: 16,
                    marginBottom: 5,
                    color: textColor
                  }}
                >
                  {item.color}
                </Text>
              </View>
            );
          })}
        </View>
        <View style={{ flexDirection: 'row' }}>
          <ActionButton
            iconName={'trash'}
            actionCallback={() => {
              props.removeSchemeID(props.scheme.id);
            }}
          />
          <Text
            style={[
              styles.cardTextSub,
              {
                alignSelf: 'center',
                marginLeft: 'auto',
                padding: 10,
                fontSize: 18,
                fontWeight: 'bold'
              }
            ]}
          >
            {props.scheme.customName}
          </Text>
        </View>
      </View>
    </>
  );
};
