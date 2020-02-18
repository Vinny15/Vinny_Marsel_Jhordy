import React from 'react';
import { Text, Button, View, StyleSheet, ImageBackground,TouchableOpacity, Image, Alert, FlatList } from 'react-native';

const MenuScreen = ({ navigation }) => {
    return (
        <ImageBackground 
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQRAiHGGkZvf5ofUp5uXjM96pUAdbjBgHj0bDJiUlFIlimxPP0'}}
            style={{width: 400, height: 800}}
        >
            <View style={styles.listContainer}>
                <TouchableOpacity style = {[styles.card, {backgroundColor:'#87CEEB'}]} onPress={() => navigation.navigate('Makan')} >
                    <Image style={styles.cardImage} source={{uri:"https://cdn.pixabay.com/photo/2016/03/31/21/15/bread-1296280_960_720.png"}}/>
                </TouchableOpacity>
                <Text>Makanan</Text>
                <TouchableOpacity style = {[styles.card, {backgroundColor:'#87CEEB'}]} onPress={() => navigation.navigate('Minum')} >
                    <Image style={styles.cardImage} source={{uri:"https://pngimage.net/wp-content/uploads/2018/06/minuman-vector-png-2.png"}}/>
                </TouchableOpacity>
                <Text>Minuman</Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    listContainer:{
      alignItems:'center'
    },
    card:{
      shadowColor: '#474747',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
  
      elevation: 12,
      marginVertical: 20,
      marginHorizontal: 40,
      backgroundColor:"#e2e2e2",
      //flexBasis: '42%',
      width:120,
      height:120,
      borderRadius:60,
      alignItems:'center',
      justifyContent:'center'
    },
    cardImage:{
      height: 70,
      width: 70,
      alignSelf:'center'
    }
  });

export default MenuScreen;