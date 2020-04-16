import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';


export default class ProfileDetail extends Component {
  
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
              <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar1.png"}} />
              <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar2.png"}} />
              <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar3.png"}} />
              <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar4.png"}} />
              <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar5.png"}} />
              <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar6.png"}} />
            </View>
          </View>

          <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.loginText}>Login                                                                                                         ----></Text>
          </TouchableOpacity>

          <View style={styles.photosCard}>
            
            <View style={styles.body}>
            <Text style={styles.cardTittle}>Photos</Text>

                <View style={styles.bodyContent}>
                    <View style={styles.menuBox}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProdukPetani')} >
                            <Image style={styles.icon} source={{uri: 'https://png.icons8.com/facebook-like/color/40/2ecc71'}}/>
                            <Text>Produk</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuBox}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProdukPetani')} >
                            <Image style={styles.icon} source={{uri: 'https://png.icons8.com/facebook-like/color/40/2ecc71'}}/>
                            <Text>Produk</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuBox}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProdukPetani')} >
                            <Image style={styles.icon} source={{uri: 'https://png.icons8.com/facebook-like/color/40/2ecc71'}}/>
                            <Text>Produk</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuBox}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProdukPetani')} >
                            <Image style={styles.icon} source={{uri: 'https://png.icons8.com/facebook-like/color/40/2ecc71'}}/>
                            <Text>Produk</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuBox}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProdukPetani')} >
                            <Image style={styles.icon} source={{uri: 'https://png.icons8.com/facebook-like/color/40/2ecc71'}}/>
                            <Text>Produk</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuBox}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProdukPetani')} >
                            <Image style={styles.icon} source={{uri: 'https://png.icons8.com/facebook-like/color/40/2ecc71'}}/>
                            <Text>Produk</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('ProdukPelanggan')}>
                        <Text style={styles.loginText}>See All Produk                                                                                      ----></Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>

           
          <View style={[styles.card, styles.profileCard]}> 
            <Image style={styles.avatar} source={{uri: "https://bootdey.com/img/Content/avatar/avatar6.png"}} />
            <Text  style={styles.name}>Vinny</Text>
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
  }
});
