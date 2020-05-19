import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ListView
} from 'react-native';

export default class ProfileView extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
         {image: "https://png.icons8.com/shopping-cart/color/40",     title:"Order"},
         {image: "https://png.icons8.com/heart-outline/color/40",     title:"Like"},
         {image: "https://png.icons8.com/voice-recognition/color/40", title:"Comment"},
         {image: "https://png.icons8.com/downloads/office/40",        title:"Download"},
         {image: "https://png.icons8.com/edit-file/color/40",         title:"Edit"},
      ]),
    };
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar3.png'}}/>
                <Text style={styles.name}>Jane Doe</Text>
            </View>
          </View>

          <View style={styles.body}>
            <ListView style={styles.container} enableEmptySections={true}
              dataSource={this.state.dataSource}
              renderRow={(user) => {
                return (
                  <TouchableOpacity>
                    <View style={styles.box}>
                      <Image style={styles.icon} source={{uri: user.image}}/>
                      <Text style={styles.title}>{user.title}</Text>
                      <Image style={styles.btn} source={{uri: "https://png.icons8.com/customer/office/40"}}/>
                    </View>
                  </TouchableOpacity>
                )
            }}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#EE82EE",
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
    borderColor: "#FF6347",
    marginBottom:10,
  },
  icon:{
    width: 40,
    height: 40,
  },
  title:{
    fontSize:18,
    color:"#EE82EE",
    marginLeft:4
  },
  btn:{
    marginLeft: 'auto',
     width: 40,
    height: 40,
  },
  body: {
    backgroundColor :"#E6E6FA",
  },
  box: {
    padding:5,
    marginBottom:2,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:1,
      width:-2
    },
    elevation:2
  },
  username:{
    color: "#20B2AA",
    fontSize:22,
    alignSelf:'center',
    marginLeft:10
  }
}); 