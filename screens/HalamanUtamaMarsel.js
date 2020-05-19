import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';


export default class HalamanUtamaMarsel extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>

        <View style={styles.photosCard}>
            <Text style={styles.cardTittle}>Produk Terpopuler</Text>   
            <View style={styles.photosContainer}>
              <Image style={styles.photo} source={{uri: "https://cdn-brilio-net.akamaized.net/community/2019/03/26/17915/image_1553582820_5c99cae47a271.jpg"}} />
              <Image style={styles.photo} source={{uri: "https://kuyahejo.com/wp-content/uploads/2016/03/Buah-Durian.jpg"}} />
              <Image style={styles.photo} source={{uri: "https://www.go-dok.com/wp-content/uploads/2017/07/7-Manfaat-Manggis-WEB.jpg"}} />
              <Image style={styles.photo} source={{uri: "https://img.okezone.com/content/2017/11/13/298/1813316/ragam-jenis-jeruk-lokal-yang-penuh-khasiat-jeruk-sambas-jadi-andalan-3ejCADEvU7.jpg"}} />
              <Image style={styles.photo} source={{uri: "https://topmedia.co.id/images/post/2019/02/640x400_pisang_.jpg"}} />
              <Image style={styles.photo} source={{uri: "https://s2.bukalapak.com/img/702739643/original/pepaya_orange_lady.jpg"}} />
            </View>
          </View>

          <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('LoginPetani')}>
            <Text style={styles.loginText}>Login                                                                                                         ----></Text>
          </TouchableOpacity>

          <View style={styles.photosCard}>
            
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
                    
                    <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('ProdukPelanggan')}>
                        <Text style={styles.loginText}>See All Produk                                                                                      ----></Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>

          <View style={styles.card}>
            <Text style={styles.cardTittle}>Rempah-rempah</Text>   
            <Text> - Looorem ipsum dolor sit amet</Text>   
            <Text> - Lorem ipsum dolor sit amet</Text>   
            <Text> - Lorem ipsum dolor sit amet</Text>   
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTittle}>Sembako</Text>   
            <Text> - Lorem ipsum dolor sit amet</Text>   
            <Text> - Lorem ipsum dolor sit amet</Text>   
            <Text> - Lorem ipsum dolor sit amet</Text>   
          </View>

          
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10,
    backgroundColor : "#DCDCDC"
  },
  cardTittle:{
    color:"#808080",
    fontSize:22,
  },
  avatar:{
    width:150,
    height:150,
  },
  card:{
    backgroundColor: "#FFFFFF",
    borderRadius:10,
    padding:10,
    height:100,
    marginTop:10,
  },
  profileCard:{
    height:200,
    alignItems: 'center',
    marginTop:5,
  },
  name:{
    marginTop:10,
    fontSize:22,
    color:"#808080",
  },
  photosContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 'auto',
  },
  photosCard:{
    marginTop:10,
    marginBottom:10,
  },
  photo:{
    width:113,
    height:113,
    marginTop:10,
    marginRight:10,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  bodyContent:{
    paddingTop:5,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  menuBox:{
    backgroundColor: "#DCDCDC",
    width:113,
    height:115,
    alignItems: 'center',
    justifyContent: 'center',
    margin:5,
    marginBottom:10,
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:2,
      width:-2
    },
    elevation:4,
  },
  buttonContainer: {
    height:25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    width:373,
    borderRadius:10,
  },
  loginText: {
    color: 'black',
    fontSize: 14,
    fontStyle: 'italic',
  },
  loginButton: {
    backgroundColor: '#3498db',
  },
  icon: {
    width:110,
    height:90,
  },
  info:{
    fontSize:22,
    color: "#696969",
    textAlign: "center",
  }
});
