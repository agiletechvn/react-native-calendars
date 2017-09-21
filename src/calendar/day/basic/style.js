import { StyleSheet, Platform } from 'react-native';
import * as defaultStyle from '../../../style';

export default function styleConstructor(theme = {}) {
  const appStyle = { ...defaultStyle, ...theme };
  return StyleSheet.create({
    base: {
      width: 30,
      height: 30,
      alignItems: 'center'
    },
    base1: {
      width: 35,
      height: 35,
      alignItems: 'center',
      justifyContent: 'center'
    },
    base2: {
      width: 39,
      height: 39,
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      marginTop: 4,
      fontSize: appStyle.textDayFontSize,
      fontFamily: appStyle.textDayFontFamily,
      fontWeight: '300',
      color: appStyle.foregroundColor,
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    alignedText: {
      marginTop: Platform.OS === 'android' ? 4 : 6
    },
    selected: {
      backgroundColor: appStyle.selectedDayBackgroundColor,
      borderRadius: 16
    },
    selected1: {
      borderColor: appStyle.selectedDayBackgroundColor,
      borderRadius: 18,
      backgroundColor: 'transparent',
      borderWidth: 1
    },
    selected2: {
      borderColor: '#c5c5c5',
      borderRadius: 20,
      backgroundColor: 'transparent',
      borderWidth: 1
    },
    todayText: {
      color: '#fff',
      fontWeight: 'bold'
    },
    selectedText: {
      color: appStyle.selectedDayTextColor,
      fontWeight: 'bold'
    },
    disabledText: {
      color: appStyle.textDisabledColor
    },
    dot: {
      width: 4,
      height: 4,
      marginTop: 1,
      borderRadius: 2,
      opacity: 0
    },
    visibleDot: {
      opacity: 1,
      backgroundColor: appStyle.dotColor
    },
    selectedDot: {
      backgroundColor: appStyle.selectedDotColor
    }
  });
}
