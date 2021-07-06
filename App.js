import * as React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {AppDrawerNavigator} from './components/AppDrawerNavigator'

export default class App extends React.Component{
  render(){
    return(
      
        <AppContainer/>
 
    )
  }
}
const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen: {screen: WelcomeScreen},
  Drawer:{screen:AppDrawerNavigator}
})

const AppContainer = createAppContainer(SwitchNavigator)

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})