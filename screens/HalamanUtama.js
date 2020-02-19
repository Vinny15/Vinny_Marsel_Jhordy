import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

export default class HalamanUtama extends Component {

  render() {
    return (
      <View style={styles.container}>


        <ImageBackground 
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQRAiHGGkZvf5ofUp5uXjM96pUAdbjBgHj0bDJiUlFIlimxPP0'}}
            style={{width: 400, height: 800}}
        >

            <View style={styles.bodyContent}>

                <View style={styles.menuBox}>
                    <Image style={styles.icon} source={{uri: 'https://png.icons8.com/cell-phone/dusk/50/ffffff'}}/>
                    <Text style={styles.info}>Intro</Text>
                </View>

                <View style={styles.menuBox}>
                    <Image style={styles.icon} source={{uri: 'https://png.icons8.com/user-menu-male/color/50/ffffff'}}/>
                    <Text style={styles.info}>Sign In</Text>
                </View>

                <View style={styles.menuBox}>
                    <Image style={styles.icon} source={{uri: 'https://png.icons8.com/bar-chart/dusk/50/ffffff'}}/>
                    <Text style={styles.info}>Charts</Text>
                </View>

                <View style={styles.menuBox}>
                    <Image style={styles.icon} source={{uri: 'https://png.icons8.com/shopping-cart/color/50/ffffff'}}/>
                    <Text style={styles.info}>Cart</Text>
                </View>

                <View style={styles.menuBox}>
                    <Image style={styles.icon} source={{uri: 'https://png.icons8.com/product/nolan/50/ffffff'}}/>
                    <Text style={styles.info}>Product</Text>
                </View>

                <View style={styles.menuBox}>
                    <Image style={styles.icon} source={{uri: 'https://png.icons8.com/shopping-basket/color/50/ffffff'}}/>
                    <Text style={styles.info}>Order</Text>
                </View>

                <View style={styles.menuBox}>
                    <Image style={styles.icon} source={{uri: 'https://png.icons8.com/notification/dusk/50/ffffff'}}/>
                    <Text style={styles.info}>Info</Text>
                </View>

                <View style={styles.menuBox}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('About')}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/profile/color/50/ffffff'}}/>
                    </TouchableOpacity>
                    <Text style={styles.info}>Profile</Text>
                </View>

                <View style={styles.menuBox}>
                    <Image style={styles.icon} source={{uri: 'https://png.icons8.com/friends/color/50/ffffff'}}/>
                    <Text style={styles.info}>Friends</Text>
                </View>

            </View>

            <View style={styles.header}>
                <View style={styles.headerContent}>

                    <View style={styles.avatar}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/friends/color/50/ffffff'}}/>
                        <Text style={styles.info}>Iklan</Text>
                    </View>
                </View>
            </View>


        </ImageBackground>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
  },
  headerContent:{
    padding:10,
    height: 700,
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: "#DCDCDC",
    width:350,
    height:270,
    alignItems: 'center',
    justifyContent: 'center',
    margin:2,
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:2,
      width:-2
    },
    elevation:0,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  textInfo:{
    fontSize:18,
    marginTop:20,
    color: "#696969",
  },
  bodyContent:{
    paddingTop:40,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  menuBox:{
    backgroundColor: "#DCDCDC",
    width:106,
    height:105,
    alignItems: 'center',
    justifyContent: 'center',
    margin:12,
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:2,
      width:-2
    },
    elevation:4,
  },
  icon: {
    width:60,
    height:60,
  },
  info:{
    fontSize:22,
    color: "#696969",
  }
});