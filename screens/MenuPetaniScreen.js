
import React from 'react';
import { Text, Button, View, StyleSheet, ImageBackground,TouchableOpacity, Image, Alert, FlatList } from 'react-native';

const MenuPetaniScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.cardHeader}>
              <Text style={styles.title}> </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                <Image style={styles.icoon} source={{uri:"https://d30y9cdsu7xlg0.cloudfront.net/png/194977-200.png"}}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Buah')}>
                <Image style={styles.icoon} source={{uri:"https://reactnativecode.com/wp-content/uploads/2019/03/settings_icon.png"}}/>
              </TouchableOpacity>
            </View>
            
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: 'https://bootdey.com/img/Content/avatar/avatar1.png'}}/>

                <Text style={styles.name}>
                  John Doe
                </Text>
                <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => navigation.navigate()}>
                  <Text style={styles.loginText}>Edit Profile</Text>
                </TouchableOpacity>

            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.bodyContent}>

              <View style={styles.menuBox}>
               <TouchableOpacity onPress={() => navigation.navigate('ProdukPetani')} >
                 <Image style={styles.icon} source={{uri: 'https://png.icons8.com/facebook-like/color/40/2ecc71'}}/>
                 <Text>Produk</Text>
               </TouchableOpacity>
              </View>

              <View style={styles.menuBox}>
               <TouchableOpacity onPress={() => navigation.navigate('Pesanan')}>
                 <Image style={styles.icon} source={{uri: 'https://png.icons8.com/heart/office/40/2ecc71'}}/>
                 <Text>Pesanan</Text>
               </TouchableOpacity>
              </View>

            </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
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
    width:100,
    height:100,
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
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  title:{
    fontSize:16,
    flex:1,
    color:"#FFFFFF",
    fontWeight:'bold'
  },
  icoon: {
    width:25,
    height:25,
  }
});

export default MenuPetaniScreen;