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
import HalamanUtamaVinny from './screens/HalamanUtamaVinny';
import SuksesOrderScreen from './screens/SuksesOrderScreen';
import ProfilePelangganScreen from './screens/ProfilePelangganScreen';

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
  ProfilePelanggan: ProfilePelangganScreen,
  DetailMangga: DetailManggaScreen,
  DetailDurian: DetailDurianscreen,
  DetailPisang: DetailPisangScreen,
  DetailManggis: DetailMaggisScreen,
  DetailJeruk: DetailJerukScreen,
  Halaman: HalamanUtama,
  HalamanVinny: HalamanUtamaVinny,
  SuksesOrder: SuksesOrderScreen
},{
  initialRouteName: 'HalamanVinny',
  defaultNavigationOptions: {
    headerTitle: 'TaniBisnisShop',
    headerStyle: {
      backgroundColor: '#3498db'
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
