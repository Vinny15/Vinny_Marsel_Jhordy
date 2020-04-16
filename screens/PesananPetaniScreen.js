import React from 'react';
import { Text, Button, View, StyleSheet, ImageBackground,TouchableOpacity, Image, Alert, FlatList } from 'react-native';

const PesananPetaniScreen = ({ navigation }) => {
  return (

    <View style={styles.container}>
      <View style={styles.menuBox}>
        <Text>Mangga</Text>
          <Image style={styles.icon} source={{uri: "https://cdn-brilio-net.akamaized.net/community/2019/03/26/17915/image_1553582820_5c99cae47a271.jpg"}}/>
        
        <View style={styles.socialBarContainer}>
          <View style={styles.socialBarSection}>
            <TouchableOpacity style={styles.socialBarButton}>
              <Text style={[styles.socialBarLabel, styles.share]}>Kirim</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.socialBarSection}>
            <TouchableOpacity style={styles.socialBarButton}>
              <Text style={styles.socialBarLabel}>Habis</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>

      <View style={styles.menuBox}>
        <Text>Durian</Text>
          <Image style={styles.icon} source={{uri: "https://kuyahejo.com/wp-content/uploads/2016/03/Buah-Durian.jpg"}}/>
        
        <View style={styles.socialBarContainer}>
          <View style={styles.socialBarSection}>
            <TouchableOpacity style={styles.socialBarButton}>
              <Text style={[styles.socialBarLabel, styles.share]}>Kirim</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.socialBarSection}>
            <TouchableOpacity style={styles.socialBarButton}>
              <Text style={styles.socialBarLabel}>Habis</Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </View>

      <View style={styles.menuBox}>
        <Text>Manggis</Text>
          <Image style={styles.icon} source={{uri: "https://www.go-dok.com/wp-content/uploads/2017/07/7-Manfaat-Manggis-WEB.jpg"}}/>
        
        <View style={styles.socialBarContainer}>
          <View style={styles.socialBarSection}>
            <TouchableOpacity style={styles.socialBarButton}>
              <Text style={[styles.socialBarLabel, styles.share]}>Kirim</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.socialBarSection}>
            <TouchableOpacity style={styles.socialBarButton}>
              <Text style={styles.socialBarLabel}>Habis</Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </View>

      <View style={styles.menuBox}>
        <Text>Jeruk</Text>
          <Image style={styles.icon} source={{uri: "https://img.okezone.com/content/2017/11/13/298/1813316/ragam-jenis-jeruk-lokal-yang-penuh-khasiat-jeruk-sambas-jadi-andalan-3ejCADEvU7.jpg"}}/>
        
        <View style={styles.socialBarContainer}>
          <View style={styles.socialBarSection}>
            <TouchableOpacity style={styles.socialBarButton}>
              <Text style={[styles.socialBarLabel, styles.share]}>Kirim</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.socialBarSection}>
            <TouchableOpacity style={styles.socialBarButton}>
              <Text style={styles.socialBarLabel}>Habis</Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </View>

      <View style={styles.menuBox}>
        <Text>Pisang</Text>
          <Image style={styles.icon} source={{uri: "https://topmedia.co.id/images/post/2019/02/640x400_pisang_.jpg"}}/>
        
        <View style={styles.socialBarContainer}>
          <View style={styles.socialBarSection}>
            <TouchableOpacity style={styles.socialBarButton}>
              <Text style={[styles.socialBarLabel, styles.share]}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.socialBarSection}>
            <TouchableOpacity style={styles.socialBarButton}>
              <Text style={styles.socialBarLabel}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingTop:40,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  menuBox:{
    backgroundColor: "white",
    width:170,
    height:170,
    alignItems: 'center',
    justifyContent: 'center',
    margin:12
  },
  icon: {
    width:150,
    height:150,
  },
  info:{
    fontSize:14,
    color: "#696969",
    textAlign: "left",
  },
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default PesananPetaniScreen;