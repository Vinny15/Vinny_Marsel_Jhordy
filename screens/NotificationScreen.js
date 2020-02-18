import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
} from 'react-native';

export default class NotificationsView extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit"}, 
        {description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit"}, 
        {description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit"}, 
        {description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit"}, 
        {description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit"}, 
        {description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit"}, 
        {description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit"},
        {description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit"},
        {description: "Lorem ipsum dolor sit amet, indu consectetur adipiscing elit"},
      ]),
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ListView style={styles.notificationList} enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={(notification) => {
            return (
              <View style={styles.notificationBox}>
                <Image style={styles.icon}
                  source={{uri: 'https://png.icons8.com/notification/ultraviolet/50/3498db'}}/>
                
                <Text style={styles.description}>{notification.description}</Text>
              </View>
            )}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#DCDCDC'
  },
  notificationList:{
    marginTop:20,
    padding:10,
  },
  notificationBox: {
    padding:20,
    marginTop:5,
    marginBottom:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius:10,
  },
  icon:{
    width:45,
    height:45,
  },
  description:{
    fontSize:18,
    color: "#3498db",
    marginLeft:10,
  },
});