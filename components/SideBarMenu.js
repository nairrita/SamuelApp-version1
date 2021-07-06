import * as React from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';

export default class SideBarMenu extends React.Component{
    render(){
        return(
            <View style = {{flex:1}}>
                
           <DrawerItems/>
                
            </View>
        )
    }
}