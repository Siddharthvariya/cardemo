import { StyleSheet } from 'react-native'
//COLORS
import COLORS from '../Helper/colors'
export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.WHITE
  },
  Header: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop:10
  },
  logo: {
    height: 220,
    width: "90%",
    resizeMode: 'cover',
    alignSelf:'center',
    justifyContent:'center',
    borderRadius: 10,
    marginTop:10

  },
   TextInput: {
    borderColor: COLORS.GRAY,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    flex:1,
    marginLeft:10,
    backgroundColor:COLORS.GRAY
    
  },
  phoneNo: {
    fontSize: 14,
    fontWeight: '500',
    
  },
  dataList: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 5,
    marginHorizontal: 10,
    marginBottom: 10,
    paddingVertical: 10,
    borderRadius:10,
    justifyContent:'center'
  },
  dataListcar: {
    flexDirection: 'row'
    
  },
  profile: {
    
    resizeMode: 'cover',
    alignSelf: 'center'
 
  },
  profilecar: {
    height:120,width:120,
    resizeMode: 'cover',
    alignSelf: 'center'
 
  }
})