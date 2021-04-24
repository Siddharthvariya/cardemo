import { StyleSheet } from 'react-native'
//COLORS
import COLORS from '../Helper/colors'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.APP_PRIMARY
  },
  Header: {
    height: 50,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop:10
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
  profile: {
    resizeMode: 'cover',
    alignSelf: 'center'
 
  },
  courseDes: {
    paddingStart: 10,
    color: COLORS.DARK_GRAY,
    fontSize: 14,
  },
  courseName: {
    color: COLORS.DARK_GRAY,
    fontSize: 14,
    paddingTop:10,
    paddingStart:10,
    borderTopRightRadius: 15,
  },
  textView: {
    borderRadius: 15,
    borderTopRightRadius: 15,
  },
  courseData: {
    backgroundColor: '#ffffff',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingLeft:4,
    paddingBottom: 10,
    paddingRight: 5,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  courseImg: {
   width:250,
    borderTopStartRadius:15,
    borderTopEndRadius: 15,
   
   
  },
  containerBut: {
    backgroundColor:COLORS.WHITE,
    justifyContent: 'center',
    alignSelf: 'center',
  
    borderRadius: 15,
    margin:10,
    elevation: 4,
    shadowOpacity: 0.5,
    shadowRadius: 1,
    shadowOffset: {width: 0, height: 2},
   
  },

  imgView: {
   
    alignItems: 'center',
    justifyContent: 'center',
    borderTopStartRadius:15,
    borderTopEndRadius: 15,
    height:100,
    width:150,
    overflow:'hidden'
  },
  cartview:{
    backgroundColor:COLORS.APP_PRIMARY,
    borderRadius:5,
    justifyContent:'center',
    marginTop:25,
    marginBottom:10,padding:5
    

  }

})