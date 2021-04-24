import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput, Alert,Image,BackHandler, ImageBackground } from 'react-native'

//STYLES
import styles from './style'
import COLORS from '../Helper/colors'


//IMAGE
import LOGO from '../assets/loginbg.png' 
import LOGINUSER from '../assets/loginuser.png'
import LOCK from '../assets/loc.png'
console.disableYellowBox = true;
class Login extends Component {
  constructor(props){
    super(props);
    this.backButtonClick = this.backButtonClick.bind(this);
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
  state = {
    username: '',
    password: '',
  }
  render() {
    return (
      this.renderMainView()
    )
  }

  renderMainView = () => {
    return (
      <ImageBackground source={LOGO} style={styles.logoss} >
        <View contentContainerStyle={styles.container}>
       {this.renderHeader()}
        
        <View style={styles.containerField}>
          {this.renderPhoneNoInput()}
          {this.renderPasswordInput()}
          {this.renderSihnInBtn()}
        </View>
      </View>
      </ImageBackground>
      
    )
  }

  renderHeader = () => {
    return (
      <View>
        <Text style={styles.Header}>Red Deport</Text>
      </View>
    )
  }
  renderLogo = () => {
    return (
      <View style={{flex:3}}>
        <Image source={LOGO} style={styles.logoss} />
      </View>
    )
  }

 

  renderPhoneNoInput = () => {
    return (
      <View style={styles.TextInput}>
        
        <TextInput
          placeholder="Username"
          placeholderTextColor="#000"
          value={this.state.username}
          maxLength={12}
          onChangeText={(no) => this.setState({ username: no })}
          style={styles.username}
         
        />
        <Image source={LOGINUSER} size={48}  style={{ marginLeft: 40}} />
      </View>
    )
  }



  renderPasswordInput = () => {
    return (
      <View style={styles.TextInput}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#000"
          value={this.state.password}
          secureTextEntry={true}
          maxLength={8}
          onChangeText={(value) => this.setState({ password: value })}
          style={styles.phoneNo}/>
        <Image source= {LOCK} size={30}  style={{ marginLeft: 30 }} />
      </View>
    )
  }

  renderSihnInBtn = () => {
    return (
      <TouchableOpacity style={styles.signInBtn} onPress={() =>  this.props.navigation.replace('Dashboard')}>
        <Text style={styles.signIn}>Login</Text>
      </TouchableOpacity>
    )
  }
}

export default Login
