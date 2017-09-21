import { StyleSheet, Platform } from 'react-native';
import * as defaultStyle from '../../style';

export default function (theme = {}) {
  const appStyle = { ...defaultStyle, ...theme };
  return StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 10,
      paddingRight: 10,
      alignItems: 'center'
    },
    monthText: {
      fontSize: appStyle.textMonthFontSize,
      fontFamily: appStyle.textMonthFontFamily,
      fontWeight: '300',
      color: appStyle.monthTextColor,
      margin: 10
    },
    arrow: {
      padding: 10
    },
    arrowImage: {
      ...Platform.select({
        ios: {
          tintColor: appStyle.arrowColor
        },
        android: {
          tintColor: appStyle.arrowColor
        }
      })
    },
    week: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderTopWidth: 0.5,
      borderTopColor: '#D2D2D2',
      borderBottomWidth: 0.5,
      borderBottomColor: '#D2D2D2',
      alignItems: 'center',
      paddingVertical: 5, paddingTop: 7
    },
    dayHeader: {
      marginTop: 2,
      marginBottom: 7,
      width: 32,
      textAlign: 'center',
      fontSize: appStyle.textDayHeaderFontSize,
      fontFamily: appStyle.textDayHeaderFontFamily,
      color: appStyle.textSectionTitleColor,

    }
  });
}
