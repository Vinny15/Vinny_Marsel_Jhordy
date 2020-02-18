import React from 'react';
import { Text, Button, View, StyleSheet, ImageBackground,TouchableOpacity, Image, Alert, FlatList } from 'react-native';

const HomeScreenBuah = ({ navigation }) => {
    return (
        <ImageBackground 
            source={{uri: 'http://hintergrundbild.org/wallpaper/full/1/4/e/52984-einfarbige-hintergrundbilder-2048x2048-fuer-ipad-2.jpg'}}
            style={{width: 400, height: 800}}
        >
            <View style={styles.listContainer}>
                <TouchableOpacity style = {[styles.card, {backgroundColor:'#00BFFF'}]} onPress={() => navigation.navigate('Buah')} >
                    <Image style={styles.cardImage} source={{uri:"https://cdn.pixabay.com/photo/2018/09/06/15/22/fruits-icons-3658525_960_720.png"}}/>
                </TouchableOpacity>
                <Text>Buah-buahan</Text>
                <TouchableOpacity style = {[styles.card, {backgroundColor:'#87CEEB'}]} onPress={() => navigation.navigate('Sayur')} >
                    <Image style={styles.cardImage} source={{uri:"http://www.clker.com/cliparts/c/z/h/C/R/T/veggies-hi.png"}}/>
                </TouchableOpacity>
                <Text>Sayur-sayuran</Text>
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

export default HomeScreenBuah;