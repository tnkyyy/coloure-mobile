import ColorCard from './ColorCard';
import { Text } from 'react-native';
import { useDebugValue, useEffect } from 'react';

export const SchemesDisplayer = (props) => {
  let schemes = JSON.parse(props.schemes);

  if (schemes !== undefined) {
    console.log(typeof schemes);
    console.log(schemes);
  }

  return <Text>SchemesDisplayer is running</Text>;
};
