import * as React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import OldAccept from '../screens/OldAccept';
import YoungRequest from '../screens/YoungRequest';


export const AppTabNavigator = createBottomTabNavigator({
    OldAcceptance:{
        screen: OldAccept,
        navigationOptions : {
            tabBarIcon: <Image source = {require("../assets/accept.jpeg")} style = {{width:20,height:20}}/>,
            tabBarLabel: 'Old Acceptance',
        }
    },

    YoungRequest:{
        screen: YoungRequest,
        navigationOptions:{
            tabBarIcon: <Image source = {require("../assets/request.jpeg")} style = {{width:20, height:20}}/>,
            tabBarLabel: 'Young Request'
        }
    }
})