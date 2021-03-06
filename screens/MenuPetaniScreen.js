
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
              <TouchableOpacity onPress={() => navigation.navigate('')}>
                <Image style={styles.icoon} source={{uri:"https://reactnativecode.com/wp-content/uploads/2019/03/settings_icon.png"}}/>
              </TouchableOpacity>
            </View>
            
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: 'https://bootdey.com/img/Content/avatar/avatar1.png'}}/>

                <Text style={styles.name}>
                  Marsel Dien
                </Text>
            </View>
          </View>

          <View style={styles.body}>
            <Text style={styles.cardTittle}>Photos Produk</Text>

                <View style={styles.bodyContent}>
                    <View style={styles.menuBox}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailMangga')} >
                            <Image style={styles.icon} source={{uri: 'https://cdn-brilio-net.akamaized.net/community/2019/03/26/17915/image_1553582820_5c99cae47a271.jpg'}}/>
                            <Text style={styles.info}>Mangga</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuBox}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailDurian')} >
                            <Image style={styles.icon} source={{uri: 'https://kuyahejo.com/wp-content/uploads/2016/03/Buah-Durian.jpg'}}/>
                            <Text style={styles.info}>Durian</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuBox}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailJeruk')} >
                            <Image style={styles.icon} source={{uri: 'https://img.okezone.com/content/2017/11/13/298/1813316/ragam-jenis-jeruk-lokal-yang-penuh-khasiat-jeruk-sambas-jadi-andalan-3ejCADEvU7.jpg'}}/>
                            <Text style={styles.info}>Jeruk</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuBox}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailManggis')} >
                            <Image style={styles.icon} source={{uri: 'https://www.go-dok.com/wp-content/uploads/2017/07/7-Manfaat-Manggis-WEB.jpg'}}/>
                            <Text style={styles.info}>Manggis</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuBox}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailPisang')} >
                            <Image style={styles.icon} source={{uri: 'https://topmedia.co.id/images/post/2019/02/640x400_pisang_.jpg'}}/>
                            <Text style={styles.info}>Pisang</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuBox}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailPepaya')} >
                            <Image style={styles.icon} source={{uri: 'https://s2.bukalapak.com/img/702739643/original/pepaya_orange_lady.jpg'}}/>
                            <Text style={styles.info}>Pepayah</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => navigation.navigate('ProdukPetani')}>
                        <Text style={styles.loginText}>See All Produk ----></Text>
                    </TouchableOpacity>

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
    width:100,
    height:90,
  },
  info:{
    fontSize:14,
    color: "#696969",
    textAlign: 'center'
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
  buttonContainer: {
    height:25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    width:373,
    borderRadius:10,
  },loginText: {
    color: 'black',
    fontSize: 14,
    fontStyle: 'italic',
  },
  loginButton: {
    backgroundColor: '#3498db',
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