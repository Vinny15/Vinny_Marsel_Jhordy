import React from 'react';
import { Text, Button, View, StyleSheet, ImageBackground,TouchableOpacity, Image, Alert, FlatList } from 'react-native';
import SearchBar from 'react-native-search-bar';

const HomeScreen = ({ navigation }) => {
    return (
        <ImageBackground 
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQRAiHGGkZvf5ofUp5uXjM96pUAdbjBgHj0bDJiUlFIlimxPP0'}}
            style={{width: 400, height: 800}}
        >
            <View style={styles.listContainer}>
            <SearchBar
              ref="searchBar"
              placeholder="Search"
              onChangeText={...}
              onSearchButtonPress={...}
              onCancelButtonPress={...}
            />


                <TouchableOpacity style = {[styles.card, {backgroundColor:'#E0FFFF'}]} onPress={() => navigation.navigate('Menu')} >
                    <Image style={styles.cardImage} source={{uri:"https://cdn.pixabay.com/photo/2013/07/12/12/03/food-145188_960_720.png"}}/>
                </TouchableOpacity>
                <Text>Menu Makanan dan Minuman</Text>
                <TouchableOpacity style = {[styles.card, {backgroundColor:'#4682B4'}]} onPress={() => navigation.navigate('About')} >
                <Image style={styles.cardImage} source={{uri:"https://img.icons8.com/color/70/000000/name.png"}}/>
                </TouchableOpacity>
                <Text>Ebout</Text>
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

export default HomeScreen;