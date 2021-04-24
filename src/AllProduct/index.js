import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Image,TextInput,FlatList,BackHandler } from 'react-native'
//STYLES
import styles from './style'

//IMAGES

import car1 from '../assets/car1.png'
import car4 from '../assets/car4.png'
import car3 from '../assets/car3.png'
import start from '../assets/star.png'
import cart from '../assets/cart.png'
class AllProducts extends Component {

  constructor(props){
    super(props);
    this.backButtonClick = this.backButtonClick.bind(this);
    this.state = {
        data: [
          { icon: car1 , name:"Clutch"},
          { icon: car3 , name:"Damper"},
          { icon: car4 , name:"Batteries"}
        ]
    };
  }
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backButtonClick);
  }

  componentWillUnmount(){
    BackHandler.removeEventListener('hardwareBackPress', this.backButtonClick);
  }

  backButtonClick(){
    if(this.props.navigation && this.props.navigation.goBack){
      this.props.navigation.goBack(null);
      return true;
    }
    return false;
  }
 
  render() {
    return (
      this.renderMainView()
    )
  }
  renderMainView = () => {
    return (
      <View contentContainerStyle={styles.container}>
        {this.renderHeader()}
        {this.GridViewList()} 
      </View>
    )
  }
 
 
  renderHeader = () => {
    return (
      <View style={styles.Header}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text style={{fontSize:30}}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={{marginLeft:10,justifyContent:'center',fontWeight:"bold"}}>ALL PRODUCTS</Text>
      </View>
    )
  }
 
 
  GridViewList = () => {
    return (

    <View style={{justifyContent:'center',alignSelf:'center',flexGrow:1}}>
          <FlatList
            data={this.state.data}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={styles.containerBut}>
                <View style={styles.imgView}>
                  <View style={styles.courseImgView}>
                    <Image
                     source={ item.icon }
                      style={styles.courseImg}
                    />
                  </View>
                </View>
                <View style={styles.courseData}>
                  <View style={styles.textView}>
                    <Text style={styles.courseName} numberOfLines={1}>
                      {item.name}
                    </Text>
                    <Image
                     source={start}
                     style={{marginLeft:5,width:90,height:15}}
                    />
                    <Text numberOfLines={2} style={styles.courseDes}>
                      {"$ 300"}
                    </Text>
                  </View>
                  <View style={styles.cartview}>
                  <Image
                     source={cart}
                     style={{width:15,height:15,justifyContent:'center'}}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            )}></FlatList>

        </View>
    )
  } 
}



export default AllProducts
