import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import MenuUtama from './screens/MenuUtama';
import Profile from './screens/Profile';
import AboutScreen from './screens/AboutScreen';
import LoginScreen from './screens/LoginScreen';
import ChatScreen from './screens/ChatScreen';
import Notification from './screens/NotificationScreen';
import MenuPetaniScreen from './screens/MenuPetaniScreen';
import DetailManggaScreen from './screens/DetailManggaScreen';
import DetailDurianscreen from './screens/DetailDurianScreen';
import DetailPisangScreen from './screens/DetailPisangScreen';
import DetailMaggisScreen from './screens/DetailManggisScreen';
import DetailJerukScreen from './screens/DetailJerukScreen';
import DaftarProdukPetani from './screens/DaftarProdukPetaniScreen';
import DaftarProdukPelanggan from './screens/DaftarProdukPelangganScreen';
import MenuPelangganScreen from './screens/MenuPelangganScreen';
import HalamanUtama from './screens/HalamanUtama';
import AllProduk from './screens/AllProduk';
import SuksesOrder from './screens/SuksesOrder';

const navigator = createStackNavigator({
  ProdukPetani: DaftarProdukPetani,
  ProdukPelanggan: DaftarProdukPelanggan,
  Menu: MenuUtama,
  Profile: Profile,
  About: AboutScreen,
  Login: LoginScreen,
  Chat: ChatScreen,
  Notification: Notification,
  MenuPetani: MenuPetaniScreen,
  MenuPelanggan: MenuPelangganScreen,
  DetailMangga: DetailManggaScreen,
  DetailDurian: DetailDurianscreen,
  DetailPisang: DetailPisangScreen,
  DetailManggis: DetailMaggisScreen,
  DetailJeruk: DetailJerukScreen,
  Halaman: HalamanUtama,
  AllProduk: AllProduk,
  SuksesOrder: SuksesOrder
},{
  initialRouteName: 'Halaman',
  defaultNavigationOptions: {
    headerTitle: 'TaniBisnisShop',
    headerStyle: {
      backgroundColor: '#4682B4'
    }
  } 
});

export default createAppContainer(navigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
