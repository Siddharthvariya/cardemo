import { StyleSheet } from 'react-native'

//COLORS
import COLORS from '../Helper/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    borderTopEndRadius: 190,
  },
  circle: {
    height: 10
  },
  profile: {
    height: 80,
     width: 80,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginTop: -10
  }
  ,
  dataList: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor:COLORS.GRAY,
    marginHorizontal: 5,
    marginBottom: 5,
    paddingVertical: 5
  },
})