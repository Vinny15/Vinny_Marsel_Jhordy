import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';


export default class BerandaPelanggan extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <Text style={styles.cardTittle}>Search</Text>
        <View style={styles.container}>              
            
            <Text style={styles.cardTittle}>Beranda</Text>
            <View style={styles.body}> 
                <View style={styles.bodyContent}>
                    <View style={styles.menuBox}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProdukPetani')} >
                            <Image style={styles.icon} source={{uri: 'https://png.icons8.com/facebook-like/color/40/2ecc71'}}/>
                            <Text>Menu</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuBox}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfilePelanggan')} >
                            <Image style={styles.icon} source={{uri: 'https://png.icons8.com/facebook-like/color/40/2ecc71'}}/>
                            <Text>Profile</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuBox}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProdukPetani')} >
                            <Image style={styles.icon} source={{uri: 'data:image/png;base64,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'}}/>
                            <Text>Cart</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuBox}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Notification')} >
                            <Image style={styles.icon} source={{uri: 'https://png.icons8.com/facebook-like/color/40/2ecc71'}}/>
                            <Text>Notification</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuBox}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProdukPetani')} >
                            <Image style={styles.icon} source={{uri: 'https://png.icons8.com/facebook-like/color/40/2ecc71'}}/>
                            <Text></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuBox}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProdukPetani')} >
                            <Image style={styles.icon} source={{uri: 'https://png.icons8.com/facebook-like/color/40/2ecc71'}}/>
                            <Text>Produk</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('Login')}>
                      <Text style={styles.loginText}>Login                                                                                                         ----></Text>
                    </TouchableOpacity>


                </View>
            </View>
        


        <View style={styles.photosCard}>
            <Text style={styles.cardTittle}>Buah-Buahan</Text>   
            <View style={styles.photosContainer}>
              <Image style={styles.photo} source={{uri: "https://asset-a.grid.id/crop/0x0:0x0/360x240/photo/2018/05/11/186595935.jpg"}} />
              <Image style={styles.photo} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTb9FjRYN5u_8_AXe_wfEVYnpZrmw_HBCKBwa3-ef5RNZ4ToMCd&usqp=CAU"}} />
              <Image style={styles.photo} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVknDxPI2hVd2OdJyYFX_w8Slzbpg_vqqdmfoAUTDYB6BPiUMc&usqp=CAU"}} />
              <Image style={styles.photo} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWRiU6vT1E8UCg6_amKo5wJ_mEh36D5kLneoHE82EP34O7jWFq&usqp=CAU"}} />
              <Image style={styles.photo} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOAX13QbpTMJoKDdvwBdcmYuolFrUguc7fpEUIjffoTkt4dCst&usqp=CAU"}} />
              <Image style={styles.photo} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQydTNm_gnEBsbTnNL06Z8anHrVWxdIa5YkZZTPEj3fttqxuFdM&usqp=CAU"}} />
            </View>
        </View>
        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('BuahanProduk')}>
                        <Text style={styles.loginText}>See All Produk                                                                                      ----></Text>
        </TouchableOpacity>

          <View style={styles.photosCard}>
            <Text style={styles.cardTittle}>BA-RI-TO</Text>   
            <View style={styles.photosContainer}>
              <Image style={styles.photo} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcToLVoOpI8Wn1nGMYUDjs3DvG5BGM8QT5f4PEtlRQ1d0CGbRMGU&usqp=CAU"}} />
              <Image style={styles.photo} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEiDKKVCkPbfSjEIjw39z5O9pFr-LE1aNNFUEy_-ZRR86-seQO&usqp=CAU"}} />
              <Image style={styles.photo} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXt1DfdCclrvSYqteY_knOwda9rBpyM6tt9iK2eG5lAHgusHhc&usqp=CAU"}} />
            </View>
          </View>
          <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('BaritoProduk')}>
                        <Text style={styles.loginText}>See All Produk                                                                                      ----></Text>
          </TouchableOpacity>

          <View style={styles.photosCard}>
            <Text style={styles.cardTittle}>Rempah-rempah</Text>   
            <View style={styles.photosContainer}>
              <Image style={styles.photo} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhUFRo8EHLzjgTIr-una9lw1eZokiWQ9jSUN1Gpl2tb-XoniGJ&usqp=CAU"}} />
              <Image style={styles.photo} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9Lh7spnaDPEFPGvioH0F9aBrTOIUQbJnAxHkJGJa3hMKC7X29&usqp=CAU"}} />
              <Image style={styles.photo} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNjvA53ImwKBVAb5ArjPXFbsbiwFHppz8Oaompe65sJT9CJZcT&usqp=CAU"}} />
            </View>
          </View>
          <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('RempahProduk')}>
                        <Text style={styles.loginText}>See All Produk                                                                                      ----></Text>
          </TouchableOpacity>

          <View style={styles.photosCard}>
            <Text style={styles.cardTittle}>Sayur-sayuran</Text>   
            <View style={styles.photosContainer}>
              <Image style={styles.photo} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZWGUs0Cxwz9TYcZwCzcVu_m1gtkkoi7GTidphm9JtjspQQnWM&usqp=CAU"}} />
              <Image style={styles.photo} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgrARWxVo4arT6jLR_c23gzeOnCVe-9xhYgQia4eLbmp0eRJV5&usqp=CAU"}} />
              <Image style={styles.photo} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScxSOug_2rgkM5hGdAQ7IiHMnfCTLzEHbLChbYaJBL_NYF51Mv&usqp=CAU"}} />
              </View>
          </View>
          <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('ProdukPelanggan')}>
                        <Text style={styles.loginText}>See All Produk                                                                                      ----></Text>
          </TouchableOpacity>

          <View style={styles.photosCard}>
            <Text style={styles.cardTittle}>Umbi-umbian</Text>   
            <View style={styles.photosContainer}>
              <Image style={styles.photo} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTojVZ0_2PofPODTGtT5FJzv5xttvWiLPdr3DbPg3aI9V4aezh2&usqp=CAU"}} />
              <Image style={styles.photo} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnJc5aGX90xbgIyvHrE_k5nnzb6s_SNkbDMpTj1yYyue0ni_p4&usqp=CAU"}} />
              <Image style={styles.photo} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTJlYwA5o6gnW7SxsmsP9WLAljP_Yrwe70zCUDo1pfG08OoPCt&usqp=CAU"}} />
            </View>
          </View>
          <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('ProdukPelanggan')}>
                        <Text style={styles.loginText}>See All Produk                                                                                      ----></Text>
          </TouchableOpacity>

            <Text>------------------</Text>

          
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
    paddingTop:5,
  },
  bodyContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 'auto'
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
  button: {
    backgroundColor: '#3498db',
  },
  loginButton: {
    backgroundColor: '#3498db',
  }});