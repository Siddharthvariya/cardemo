import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, FlatList, Image,BackHandler,Alert  } from 'react-native'
//styles
import styles from './style'
//icon
import Icon from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
//COLORS
import COLORS from '../Helper/colors'
//Images
import PROFILE from '../assets/car1.png'
//ICON LIST
export const Home = (<AntDesign name="home" size={30} color={COLORS.GRAY} />)
export const allproduct = (<AntDesign name="appstore-o" size={30} color={COLORS.GRAY} />)
export const logout = (<Feather name="log-out" size={30} color={COLORS.GRAY} />)
class DrawerScreen extends Component {
  constructor(props){
    super(props);
    this.backButtonClick = this.backButtonClick.bind(this);
    this.state = {
      data: [
        { icon: Home, name: 'Home' },
        { icon: allproduct, name: 'All Products' },
        { icon: logout, name: 'Logout' }
      ], 
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
  /*
  .##....##....###....##.....##.####..######......###....########.####..#######..##....##
  .###...##...##.##...##.....##..##..##....##....##.##......##.....##..##.....##.###...##
  .####..##..##...##..##.....##..##..##.........##...##.....##.....##..##.....##.####..##
  .##.##.##.##.....##.##.....##..##..##...####.##.....##....##.....##..##.....##.##.##.##
  .##..####.#########..##...##...##..##....##..#########....##.....##..##.....##.##..####
  .##...###.##.....##...##.##....##..##....##..##.....##....##.....##..##.....##.##...###
  .##....##.##.....##....###....####..######...##.....##....##....####..#######..##....##
  */



  onPresslist = (index) => {
    switch (index) {
      case 0:
        this.props.navigation.navigate('DashBoard');
        break;
      case 1:
        // console.log(this.props);
        this.props.navigation.navigate('AllProducts');
        break;
      case 2:
        Alert.alert(
          "Rea Deport",
          "Are you sure you wrnt to Logout",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => this.props.navigation.navigate('Login') }
          ]
        );
        break;
     
      default:
        console.log('no navigation available!');
    }
  };

  handleLogut() {
    this.setState({visible: true});
  }
  fnLogout() {
    this.props.logout();
    this.props.navigation.replace('Login');
  }
  /*
  ..######...#######..##.....##.########...#######..##....##.########.##....##.########
  .##....##.##.....##.###...###.##.....##.##.....##.###...##.##.......###...##....##...
  .##.......##.....##.####.####.##.....##.##.....##.####..##.##.......####..##....##...
  .##.......##.....##.##.###.##.########..##.....##.##.##.##.######...##.##.##....##...
  .##.......##.....##.##.....##.##........##.....##.##..####.##.......##..####....##...
  .##....##.##.....##.##.....##.##........##.....##.##...###.##.......##...###....##...
  ..######...#######..##.....##.##.........#######..##....##.########.##....##....##...
  */
  renderMainView = () => {
    return (
      <ScrollView style={styles.container}>
        {this.renderHeader()}
        {/* {this.renderProfile()} */}
        {this.renderDrawerList()}
      </ScrollView>
    )
  }

  renderHeader = () => {
    return (
      <View>
        <TouchableOpacity>
          <Icon name="menu-sharp" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

    )
  }
 
  renderDrawerList = () => {
    return (
      <View>
        <View style={styles.circle}></View>
        <View style={{justifyContent:'center',alignItems:'center',fontWeight:800}}>
          <Image source={PROFILE} style={styles.profile} />
          <Text>Red Depot</Text>
        </View>
        <FlatList
          data={this.state.data}
          contentContainerStyle={{ marginTop: 20}}
          renderItem={({ item, index }) => {
            return (
              <View>
                <TouchableOpacity style={styles.dataList} onPress={() => this.onPresslist(index)}>
                  <Text style={{ marginLeft: 10 }}>{item.icon}</Text>
                  <View>
                    <Text style={{ marginLeft: 20, fontSize: 16, fontWeight: '400',color:COLORS.GRAY}}>{item.name}</Text>
                    <View style={{ marginLeft: 20,height:1,backgroundColor:COLORS.GRAY,width:'500%',marginTop:10}}></View>
                  </View>
                  
                </TouchableOpacity>
              </View>
            )
          }}
        />
      </View>

    )
  }
}

export default DrawerScreen
