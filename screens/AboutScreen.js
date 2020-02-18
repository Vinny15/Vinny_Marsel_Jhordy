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

export default class AboutScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, name: "Marsel Dien", des: "Imandi, Kec.Bolaang Mongondow, Prof.Sulawesi Utara", position:"Teknik Informatika", image:"data:image/jpeg;base64,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"},
        {id:2, name: "Vinyati Watuseke", des: "Makalisung, Kec.Minahasa-Utara, Prof.Sulawesi Utara",   position:"Teknik Informatika", image:"data:image/jpeg;base64,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"},
        {id:3, name: "Jhordy Richard Mundung", des: "Ratahan, kec.Minahasa-Tenggara, Prof.Sulawesi Utara", position:"Teknik Informatika", image:"https://pbs.twimg.com/profile_images/627356250775289856/zX1hcpA2.jpg"}
      ]
    };
  }

  clickEventListener(item) {
    Alert.alert(item.name, item.des)
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
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
                <View style={styles.cardHeader}>
                </View>
                <Image style={styles.userImage} source={{uri:item.image}}/>
                <View style={styles.cardFooter}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.position}>{item.position}</Text>
                  </View>
                </View>
              </TouchableOpacity>
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
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
   alignItems:'center'
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 5,
    backgroundColor:"white",
    flexBasis: '46%',
    marginHorizontal: 5,
  },
  cardFooter: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  userImage:{
    height: 120,
    width: 120,
    borderRadius:60,
    alignSelf:'center',
    borderColor:"#DCDCDC",
    borderWidth:3,
  },
  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#008080",
    fontWeight:'bold'
  },
  position:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },
  icon:{
    height: 20,
    width: 20, 
  }
});     