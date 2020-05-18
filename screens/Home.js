import React, { Component } from 'react';
import { Text, Button, View, StyleSheet, ImageBackground,TouchableOpacity, Image, Alert, FlatList } from 'react-native';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Profile from './Profile';

export default class Home extends Component
{
  render()
  {
    return(
      <view style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
        <text style={{fontSize:40}}>Home Screen</text>
      </view>
    );
  }
}

const TabNavigator=createMaterialBottomTabNavigator(
  {
    Home: {screen:Home,
      navigationOptions:{
        tabBarLabel:'Home',
        activeColor:'#ff0000',
        inactiveColor:'#000000',
        barStyle:{backgroundColor:'#67baf6'},
        tabBarIcon:()=>(
          <view>
            <Icon name={'home'} size={25} style={{color: '#ff0000'}}/>
          </view>
        )
      }
    },
    Profile: {screen:Profile,
      navigationOptions:{
        tabBarLabel:'Profile',
        activeColor:'#ff0000',
        inactiveColor:'#000000',
        barStyle:{backgroundColor:'#67baf6'},
        tabBarIcon:()=>(
          <view>
            <Icon name={'person'} size={25} style={{color: '#ff0000'}}/>
          </view>
        )
      }
    },
  }
);

export default createAppContainer(TabNavigator);