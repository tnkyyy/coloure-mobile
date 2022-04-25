import ColorCard from './ColorCard';
import { Text } from 'react-native';
import { useDebugValue, useEffect } from 'react';
import SchemeCard from './SchemeCard';

export const SchemesDisplayer = (props) => {
  let schemes = JSON.parse(props.schemes);
  console.log(schemes);
  return schemes.map((item, n) => (
    <SchemeCard
      key={n}
      scheme={item}
      removeSchemeID={(id) => props.removeSchemeID(id)}
    />
  ));
};
