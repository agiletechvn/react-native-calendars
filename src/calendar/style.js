import { StyleSheet } from 'react-native';
import * as defaultStyle from '../style';

export default function getStyle(theme = {}) {
  const appStyle = { ...defaultStyle, ...theme };
  return StyleSheet.create({
    container: {
    },
    week: {
      marginTop: 7,
      marginBottom: 7,
      flexDirection: 'row',
      justifyContent: 'space-around'
    }
  });
}

