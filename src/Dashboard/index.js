import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Image,TextInput,FlatList,BackHandler } from 'react-native'
//STYLES
import styles from './style'

//IMAGES

import car1 from '../assets/car1.png'
import car4 from '../assets/car4.png'
import car3 from '../assets/car3.png'
import comp1 from '../assets/comp1.png'
import comp2 from '../assets/comp2.png'
import comp3 from '../assets/comp3.png'
import sidemenu from '../assets/sidemenu.png'
import searchicon from '../assets/search.png'
import centerImg from '../assets/homebg.png'
//COLORS
import COLORS from '../Helper/colors'
class Dashboard extends Component {

  constructor(props){
    super(props);
    this.backButtonClick = this.backButtonClick.bind(this);
  }
  state = {
    Search: '',
    data: [
      { icon: comp1},
      { icon: comp2},
      { icon: comp3}
     
    ],
    data1: [
      { icon: car1},
      { icon: car4},
      { icon: car3}
     
    ],
    
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
        <ScrollView style={{top:0}}>
        {this.renderSaleImage()}
        {this.renderCenterView()}
        {this.GridViewList()}
        {this.renderCenterView1()}
        {this.GridViewList1()}
        {this.renderCenterView2()}
        {this.GridViewList2()}
        {this.renderCenterView3()}
        {this.GridViewList3()}
        </ScrollView>
      </View>
    )
  }
 
  render() {
    return (
      this.renderMainView()
    )
  }
  renderHeader = () => {
    return (
      <View style={styles.Header}>
        <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
          <Image source={sidemenu} size={20} />
        </TouchableOpacity>
        <View style={styles.TextInput}>
        <TextInput
          placeholder="Search Products"
          placeholderTextColor={COLORS.GRAY}
          value={this.state.Search}
          onChangeText={(no) => this.setState({ Search: no })}
          style={styles.phoneNo}/>
        <Image source={searchicon} size={10} style={{marginEnd:10}}/>
      </View>
     
      </View>
    )
  }
 renderSaleImage = () => {
    return (
      <View>
        <Image source={centerImg} style={styles.logo} />
      </View>
    )

  }
 
  renderCenterView = () => {
    return (
      <View style={{ flexDirection: "row", position: 'relative', justifyContent: 'space-between', marginLeft: 20,marginRight:10,marginTop:20 }}>
        <Text style={{ color: "#000", fontSize: 16, fontWeight: 'bold' }}>VEHICLE BRANDS</Text>
          <Text style={{ color: COLORS.APP_PRIMARY, fontWeight: 'bold', height: 30, width: 80, alignItems: 'center'  }}> View All</Text>
      </View>
    )
  }
  renderCenterView1 = () => {
    return (
      <View style={{ flexDirection: "row", position: 'relative', justifyContent: 'space-between', marginLeft: 20,marginRight:10 }}>
        <Text style={{ color: "#000", fontSize: 16, fontWeight: 'bold' }}>FEATURED BRANDS</Text>
          <Text style={{ color: COLORS.APP_PRIMARY, fontWeight: 'bold', height: 30, width: 80, alignItems: 'center'  }}> View All</Text>
      </View>
    )
  }
  renderCenterView2 = () => {
    return (
      <View style={{ flexDirection: "row", position: 'relative', justifyContent: 'space-between', marginLeft: 20,marginRight:10}}>
        <Text style={{ color: "#000", fontSize: 16, fontWeight: 'bold' }}>FEATURED BRANDS</Text>
          <Text style={{ color: COLORS.APP_PRIMARY, fontWeight: 'bold', height: 30, width: 80, alignItems: 'center'  }}> View All</Text>
      </View>
    )
  }
  renderCenterView3 = () => {
    return (
      <View style={{ flexDirection: "row", position: 'relative', justifyContent: 'space-between', marginLeft: 20,marginRight:10}}>
        <Text style={{ color: "#000", fontSize: 16, fontWeight: 'bold' }}>FEATURED BRANDS</Text>
          <Text style={{ color: COLORS.APP_PRIMARY, fontWeight: 'bold', height: 30, width: 80, alignItems: 'center'  }}> View All</Text>
      </View>
    )
  }
  GridViewList = () => {

    return (
      <View style={{justifyContent:'center',alignSelf:'center',flex:1}}>
          <FlatList
            data={this.state.data}
            numColumns={3}
            renderItem={({ item, index }) => {
              return (
                <View>
                  <TouchableOpacity style={styles.dataList}>
                  <Image source={ item.icon } style={styles.profile} />
                  </TouchableOpacity>

                </View>
              )
            }}
          />
        </View>
    
    )

  }

  GridViewList1 = () => {

    return (
      <View style={{justifyContent:'center',alignSelf:'center',flex:1}}>
          <FlatList
            data={this.state.data1}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <View>
                  <TouchableOpacity style={styles.dataListcar}>
                   <Image source={ item.icon } style={styles.profilecar} />
                  </TouchableOpacity>
                </View>
              )
            }}
          />
          
        </View>
    )

  }

  GridViewList2 = () => {

    return (
      <View style={{justifyContent:'center',alignSelf:'center',flex:3}}>
          <FlatList
            data={this.state.data1}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <View>
                  <TouchableOpacity style={styles.dataListcar}>
                   <Image source={ item.icon } style={styles.profilecar} />
                  </TouchableOpacity>
                </View>
              )
            }}
          />
          
        </View>
    )

  }
  
  GridViewList3 = () => {

    return (
      <View style={{justifyContent:'center',alignSelf:'center',flex:3}}>
          <FlatList
            data={this.state.data1}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <View>
                  <TouchableOpacity style={styles.dataListcar}>
                   <Image source={ item.icon } style={styles.profilecar} />
                  </TouchableOpacity>
                </View>
              )
            }}
          />
          
        </View>
    )

  }
  
}

export default Dashboard
