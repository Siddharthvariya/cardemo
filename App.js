import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

 import Login from './src/Login'
 import Dashboard from './src/Dashboard'
 import DrawerScreen from './src/DrawerScreen'
 import AllProducts from './src/AllProduct'
 const Stack = createStackNavigator();
 const Drawer = createDrawerNavigator();

const App = () => {

  function Home() {
    return (
      <Drawer.Navigator
        initialRouteName="Dashboard"
        drawerStyle={{ width: '70%' }}
        drawerContent={(props) => <DrawerScreen  {...props} />}>
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="AllProducts" component={AllProducts}/>
      </Drawer.Navigator>
    )
  }
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
