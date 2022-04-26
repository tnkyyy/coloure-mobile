import React from 'react';
import { Text } from 'react-native';
import * as Linking from 'expo-linking';
import { styles } from '../styles/styles';

export default class Anchor extends React.Component {
  _handlePress = () => {
    Linking.openURL(this.props.href);
    this.props.onPress && this.props.onPress();
  };

  render() {
    return (
      <Text
        {...this.props}
        onPress={this._handlePress}
        style={[styles.cardTextSub, { padding: 20 }]}
      >
        {this.props.children}
      </Text>
    );
  }
}
