import { StyleSheet } from 'react-native'
//COLORS
import COLORS from '../Helper/colors'
export default StyleSheet.create({
  container: {
  
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center'
  },

  Header: {
    marginTop:50,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.APP_PRIMARY
  },
  containerField: {
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 20,
    marginTop: 30,
    height: 300,
    borderRadius: 30,
    paddingHorizontal: 20,
    elevation:4
  },
  logoss: {
  flex:1,
  backgroundColor:COLORS.WHITE
   
  },
  TextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    justifyContent:'space-between',
    borderBottomWidth: 1,
    borderBottomColor:COLORS.GRAY
  
  },
  phoneNo: {
    fontSize: 16,
    fontWeight: '500'
  },
 
  signInBtn: {
    alignItems: 'center',
    backgroundColor: COLORS.APP_PRIMARY,
    marginTop: 50,
    paddingVertical: 8,
    borderRadius: 3,
    marginStart:20,
    marginEnd:20
  },
  signIn: {
    fontSize: 18,
    color: COLORS.WHITE,
    fontWeight: 'bold'
  },

  text: {
    fontWeight: 'bold',
    letterSpacing: 0.5
  }
})