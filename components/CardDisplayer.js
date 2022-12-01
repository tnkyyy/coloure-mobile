import { View } from 'react-native';
import { styles } from '../styles/styles';
import ColorCard from './ColorCard';
import ColorCardAlternate from './ColorCardAlternate';

export default CardDisplayer = (props) => {
  const colors = props.colors;

  const onRemove = (id) => {
    props.onRemove(id);
  };

  return (
    <View style={styles.generatorScrollBG}>
      {props.isAlternate === false
        ? colors.map((data) => {
            return (
              <ColorCard
                color={data.color}
                colorName={data.colorName}
                key={data.id}
                id={data.id}
                removeCallback={onRemove}
              />
            );
          })
        : colors.map((data) => {
            return (
              <ColorCardAlternate
                color={data.color}
                colorName={data.colorName}
                key={data.id}
                id={data.id}
                removeCallback={onRemove}
              />
            );
          })}
    </View>
  );
};
