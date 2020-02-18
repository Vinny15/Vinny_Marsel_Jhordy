import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';

export default class Album extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Kentang",  count:"Rp.5000", image:"http://www.kursksalvage.com/wp-content/uploads/2017/06/Kentang-2-300x243.jpg"},
        {id:2, title: "Sawi",  count:"Rp.5000", image:"https://i2.wp.com/generasihijau.com/wp-content/uploads/2018/10/sawi-hijau.jpg?resize=680%2C527&ssl=1"} ,
        {id:3, title: "Kangkung",  count:"Rp.5000", image:"https://i0.wp.com/generasihijau.com/wp-content/uploads/2018/10/kangkung.jpg?resize=680%2C483&ssl=1"}, 
        {id:4, title: "Bayam",  count:"Rp.5000", image:"https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1522924456/qahyxgba4mxoqvwktkog.jpg"}, 
        {id:5, title: "Selada",  count:"Rp.5000", image:"https://i2.wp.com/generasihijau.com/wp-content/uploads/2018/10/lettuce-1239155_1920.jpg?resize=680%2C462&ssl=1"}, 
        {id:6, title: "Buncis",  count:"Rp.5000", image:"https://img.okeinfo.net/content/2016/09/03/481/1480278/makan-buncis-sebelum-menstruasi-cegah-sembelit-LdgjcN3d0E.jpg"}, 
        {id:7, title: "Wortel",  count:"Rp.5000", image:"https://assets-a2.kompasiana.com/statics/crawl/55606c410423bd03168b4567.jpeg?t=o&v=350"}, 
        {id:8, title: "Kacang Panjang",  count:"Rp.5000", image:"https://storage.googleapis.com/manfaat/2014/08/kacang-panjang.jpg"},
        {id:9, title: "Daun Singkong",  count:"Rp.5000", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL3pK0shmy6g_ILFTZLfiFTzYNnLY0omh7ImOBiMFoqwjtSXPT&s"},
        {id:10, title: "Terong", count:"Rp.5000", image:"https://mitrapost.com/wp-content/uploads/2018/04/terong.jpg"},
      ]
    };
  }

  addProductToCart = () => {
    Alert.alert('Success', 'The product has been added to your cart')
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <View style={styles.card}>
                <View style={styles.imageContainer}>
                  <Image style={styles.cardImage} source={{uri:item.image}}/>
                </View>
                <View style={styles.cardContent}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.count}>({item.count})</Text>
                </View>
              </View>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 10,
  },
  listContainer:{
    alignItems:'center'
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card:{
    marginVertical: 8,
    backgroundColor:"white",
    flexBasis: '45%',
    marginHorizontal: 10,
  },
  cardContent: {
    paddingVertical: 17,
    justifyContent: 'space-between',
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  imageContainer:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  /******** card components **************/
  title:{
    fontSize:18,
    flex:1,
    color:"#778899"
  },
  count:{
    fontSize:18,
    flex:1,
    color:"#B0C4DE"
  },
});  