import React from 'react';
import { Text, Button, View, StyleSheet, ImageBackground,TouchableOpacity, Image, Alert, FlatList } from 'react-native';

const DaftarProdukPetani = ({ navigation }) => {
  return (
    
// data: [
//   {id:1, title: "Mangga",  count:"Rp.20000", image:"https://cdn-brilio-net.akamaized.net/community/2019/03/26/17915/image_1553582820_5c99cae47a271.jpg"},
//   {id:2, title: "Durian",  count:"Rp.10000", image:"https://kuyahejo.com/wp-content/uploads/2016/03/Buah-Durian.jpg"} ,
//   {id:3, title: "Pisang",  count:"Rp.10000", image:"https://topmedia.co.id/images/post/2019/02/640x400_pisang_.jpg"}, 
//   {id:4, title: "Jeruk",  count:"Rp.10000", image:"https://img.okezone.com/content/2017/11/13/298/1813316/ragam-jenis-jeruk-lokal-yang-penuh-khasiat-jeruk-sambas-jadi-andalan-3ejCADEvU7.jpg"}, 
//   {id:5, title: "Manggis",  count:"Rp.10000", image:"https://www.go-dok.com/wp-content/uploads/2017/07/7-Manfaat-Manggis-WEB.jpg"}, 
//   {id:6, title: "Jambu",  count:"Rp.10000", image:"https://mmc.tirto.id/image/2019/06/17/jambu-iji-istockphoto_ratio-16x9.jpg"}, 
//   {id:7, title: "Salak",  count:"Rp.10000", image:"https://cdn.idntimes.com/content-images/post/20190212/salacca-zalacca-ss-94683151806945512801280-d6f147c8fa8350dd082833f7961e3c04_600x400.jpg"}, 
//   {id:8, title: "Rambutan",  count:"Rp.10000", image:"https://s3.bukalapak.com/img/3864873494/w-1000/Buah_Rambutan_Binjai_Asli_Blitar_Grosir.png"},
//   {id:9, title: "Alpukat",  count:"Rp.10000", image:"data:image/jpeg;base64,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"},
//   {id:10, title: "Matoa", count:"Rp.10000", image:"http://3.bp.blogspot.com/-VBm2KXLVr7k/Us6Py2SY9lI/AAAAAAAAAAY/aI81CpTG7lo/s1600/images.jpg"},
// ]

    <View style={styles.container}>
      <View style={styles.menuBox}>
        <Text>Mangga</Text>
          <Image style={styles.icon} source={{uri: "https://cdn-brilio-net.akamaized.net/community/2019/03/26/17915/image_1553582820_5c99cae47a271.jpg"}}/>
        
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

      <View style={styles.menuBox}>
        <Text>Durian</Text>
          <Image style={styles.icon} source={{uri: "https://kuyahejo.com/wp-content/uploads/2016/03/Buah-Durian.jpg"}}/>
        
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

      <View style={styles.menuBox}>
        <Text>Manggis</Text>
          <Image style={styles.icon} source={{uri: "https://www.go-dok.com/wp-content/uploads/2017/07/7-Manfaat-Manggis-WEB.jpg"}}/>
        
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

      <View style={styles.menuBox}>
        <Text>Jeruk</Text>
          <Image style={styles.icon} source={{uri: "https://img.okezone.com/content/2017/11/13/298/1813316/ragam-jenis-jeruk-lokal-yang-penuh-khasiat-jeruk-sambas-jadi-andalan-3ejCADEvU7.jpg"}}/>
        
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

      <View style={styles.menuBox}>
        <Text>Pepaya</Text>
          <Image style={styles.icon} source={{uri: "https://s2.bukalapak.com/img/702739643/original/pepaya_orange_lady.jpg"}}/>
        
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
    height:140,
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

export default DaftarProdukPetani;